import { ToastAndroid } from 'react-native'
import database from '@react-native-firebase/database'

import * as Types from './ActionTypes'
import { registerUser } from './Auth'

const fuzzifikasi = (data) => new Promise(async (resolve, reject) => {
  let dataFuzzifikasi = []

  for (let i = 0; i < data.length; i++) {
    if (data[i].nilai < data[i].batasBawah && data[i].select) {
      dataFuzzifikasi.push({
        idGejala: data[i].idGejala,
        kode: data[i].kode,
        nilaiFuzzifikasi: '0'
      })
    }

    if (parseInt(data[i].nilai) >= parseInt(data[i].batasBawah) && parseInt(data[i].nilai) <= parseInt(data[i].batasAtas)) {
      const result = (data[i].nilai - data[i].batasBawah) / (data[i].batasAtas - data[i].batasBawah)

      dataFuzzifikasi.push({
        idGejala: data[i].idGejala,
        kode: data[i].kode,
        nilaiFuzzifikasi: result.toFixed(2)
      })
    }

    if (parseInt(data[i].nilai) > parseInt(data[i].batasAtas)) {
      dataFuzzifikasi.push({
        idGejala: data[i].idGejala,
        kode: data[i].kode,
        nilaiFuzzifikasi: '1'
      })
    }
  }

  resolve(dataFuzzifikasi)
})

const inferensi = (data) => new Promise(async (resolve, reject) => {
  try {
    let rule1 = []
    let rule2 = []
    let ruleFinal = []
    let dataGejala = []
    let dataPenyakit = []
    let dataInferensi = []
    let dataPengetahuan = []

    const responseGejala = await database()
      .ref('/gejala')
      .once('value')

    const responsePenyakit = await database()
      .ref('/penyakit')
      .once('value')

    const responsePengetahuan = await database()
      .ref('/pengetahuan')
      .once('value')

    const datasGejala = responseGejala.val()
    const datasPenyakit = responsePenyakit.val()
    const datasPengetahuan = responsePengetahuan.val()

    for (const key in responseGejala.val()) {
      dataGejala.push({
        idGejala: key,
        batasAtas: datasGejala[key].batasAtas,
        batasBawah: datasGejala[key].batasBawah
      })
    }

    for (const key in responsePenyakit.val()) {
      dataPenyakit.push({
        idPenyakit: key,
        batasAtas: datasPenyakit[key].batasAtas,
        batasBawah: datasPenyakit[key].batasBawah
      })
    }

    for (const key in responsePengetahuan.val()) {
      dataPengetahuan.push({
        idPengetahuan: key,
        idGejala1: datasPengetahuan[key].idGejala1,
        idGejala2: datasPengetahuan[key].idGejala2,
        idPenyakit: datasPengetahuan[key].idPenyakit
      })
    }

    for (let i = 0; i < data.length; i++) {
      dataPengetahuan
        .filter(pengetahuan => {
          if (pengetahuan.idGejala1 == data[i].idGejala) {
            return pengetahuan
          }
        })
        .map(pengetahuan => {
          rule1.push({
            idPengetahuan: pengetahuan.idPengetahuan,
            idPenyakit: pengetahuan.idPenyakit,
            idGejala1: data[i].idGejala,
            nilaiFuzzifikasi: data[i].nilaiFuzzifikasi
          })

          return rule1
        })

      dataPengetahuan
        .filter(pengetahuan => {
          if (pengetahuan.idGejala2 == data[i].idGejala) {
            return pengetahuan
          }
        })
        .map(pengetahuan => {
          rule2.push({
            idPengetahuan: pengetahuan.idPengetahuan,
            idPenyakit: pengetahuan.idPenyakit,
            idGejala2: data[i].idGejala,
            nilaiFuzzifikasi: data[i].nilaiFuzzifikasi
          })

          return rule2
        })
    }

    for (let n1 = 0; n1 < rule1.length; n1++) {
      const findRule2 = rule2.find(rule => rule.idPengetahuan == rule1[n1].idPengetahuan)

      if (findRule2) {
        ruleFinal.push({
          idPengetahuan: rule1[n1].idPengetahuan,
          idPenyakit: rule1[n1].idPenyakit,
          idGejala1: rule1[n1].idGejala1,
          idGejala2: findRule2.idGejala2,
          nilaiMin: Math.min(rule1[n1].nilaiFuzzifikasi, findRule2.nilaiFuzzifikasi),
          nilaiGejala1: rule1[n1].nilaiFuzzifikasi,
          nilaiGejala2: findRule2.nilaiFuzzifikasi,
        })
      }
    }

    for (let i = 0; i < ruleFinal.length; i++) {
      const findPenyakit = dataPenyakit.find(penyakit => penyakit.idPenyakit == ruleFinal[i].idPenyakit)

      const z = findPenyakit.batasAtas - ruleFinal[i].nilaiMin * (findPenyakit.batasAtas - findPenyakit.batasBawah)

      dataInferensi.push({
        ...ruleFinal[i],
        nilaiZ: z.toFixed(2),
      })
    }

    resolve(dataInferensi)
  } catch (error) {
    console.log(error)
    ToastAndroid.show(error, ToastAndroid.SHORT);
  }
})

const defuzifikasi = (data) => new Promise(async (resolve, reject) => {
  let hitungTambah = 0
  let hitungPredikat = 0

  for (let i = 0; i < data.length; i++) {
    const x = data[i].nilaiGejala1 * data[i].nilaiZ

    hitungPredikat += data[i].nilaiMin
    hitungTambah += x
  }

  resolve(hitungTambah / hitungPredikat)
  // test reject
})

export const setTsukamoto = ({ namaAnak, formDiagnosa, navigate }) => async (dispatch) => {
  try {
    const dataFuzzifikasi = await fuzzifikasi(formDiagnosa)

    const dataInferensi = await inferensi(dataFuzzifikasi)

    const dataDefuzifikasi = await defuzifikasi(dataInferensi)

    const tsukamoto = {
      fuzzifikasi: dataFuzzifikasi,
      inferensi: dataInferensi,
      defuzifikasi: dataDefuzifikasi
    }

    let diagnosa = []

    for (let i = 0; i < formDiagnosa.length; i++) {
      if (formDiagnosa[i].select) {
        diagnosa.push({
          // idGejala: formDiagnosa[i].idGejala,
          namaGejala: formDiagnosa[i].namaGejala,
          nilai: formDiagnosa[i].nilai,
        })
      }
    }

    dispatch(registerUser({ namaAnak, diagnosa, tsukamoto, navigate }))
  } catch (error) {
    console.log(error)
    ToastAndroid.show(error, ToastAndroid.SHORT);
  }
}