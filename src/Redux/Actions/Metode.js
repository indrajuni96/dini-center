import { ToastAndroid } from 'react-native'
import database from '@react-native-firebase/database'

import { isLoading, registerUser } from './Auth'
import * as Types from './ActionTypes'

const setDataMetode = ({ data }) => ({
  type: Types.GET_DATA_METODE,
  data
})

export const getDataMetode = () => async (dispatch) => {
  try {
    dispatch(isLoading(true))

    let dataGejala = []
    let dataPenyakit = []
    let dataPengetahuan = []
    let groupPengetahuan = []
    let dataRuleForwardChaining = []

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

    for (let i = 0; i < dataPengetahuan.length; i++) {
      const checkIdPenyakit = groupPengetahuan.find((state) => state.idPenyakit == dataPengetahuan[i].idPenyakit)

      if (!checkIdPenyakit) {
        groupPengetahuan.push({
          idPenyakit: dataPengetahuan[i].idPenyakit,
          idGejala: []
        })
      }
    }

    for (let x = 0; x < groupPengetahuan.length; x++) {
      const findDataPengetahuan = dataPengetahuan.filter((state) => state.idPenyakit == groupPengetahuan[x].idPenyakit)

      for (let y = 0; y < findDataPengetahuan.length; y++) {
        if (findDataPengetahuan[y].idPenyakit == groupPengetahuan[x].idPenyakit) {
          const findGejala1 = groupPengetahuan.find((state) => state.idGejala == findDataPengetahuan[y].idGejala1)

          if (!findGejala1) {
            groupPengetahuan[x].idGejala.push(findDataPengetahuan[y].idGejala1)
          }

          const findGejala2 = groupPengetahuan.find((state) => state.idGejala == findDataPengetahuan[y].idGejala2)

          if (!findGejala2) {
            groupPengetahuan[x].idGejala.push(findDataPengetahuan[y].idGejala2)
          }
        }
      }
    }

    for (let y = 0; y < groupPengetahuan.length; y++) {
      let removeDoubleIdGejala = groupPengetahuan[y].idGejala.filter((item, index) => {
        return groupPengetahuan[y].idGejala.indexOf(item) === index
      })

      //NOTE jagan ini jagan dihapus
      // groupPengetahuan[y].idGejalaRemoveDouble = removeDoubleIdGejala

      dataRuleForwardChaining.push({
        idPenyakit: groupPengetahuan[y].idPenyakit,
        idGejala: removeDoubleIdGejala
      })
    }

    dispatch(setDataMetode({
      data: {
        dataGejala,
        dataPenyakit,
        dataPengetahuan,
        dataRuleForwardChaining
      }
    }))
  } catch (error) {
    console.log(error)
    ToastAndroid.show(error, ToastAndroid.SHORT);
  } finally {
    dispatch(isLoading(false))
  }
}

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

const inferensi = (data, dataGejala, dataPenyakit, dataPengetahuan) => new Promise(async (resolve, reject) => {
  try {
    let rule1 = []
    let rule2 = []
    let ruleFinal = []
    let dataInferensi = []

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

const forwardChaining = (data, dataRuleForwardChaining) => new Promise((resolve, reject) => {
  let matchDataRule = []
  let newDataRule = []
  let newDataIdPenyakit = []
  let dataForwardChaining = []

  for (let i = 0; i < dataRuleForwardChaining.length; i++) {
    const findIdPenyakit = matchDataRule.find((state) => state.idPenyakit == dataRuleForwardChaining[i].idPenyakit)

    if (!findIdPenyakit) {
      newDataIdPenyakit.push(dataRuleForwardChaining[i].idPenyakit)

      matchDataRule.push({
        idPenyakit: dataRuleForwardChaining[i].idPenyakit,
        idGejala: []
      })
    }
  }

  for (let i = 0; i < dataRuleForwardChaining.length; i++) {
    for (let x = 0; x < dataRuleForwardChaining[i].idGejala.length; x++) {
      newDataRule.push({
        idPenyakit: dataRuleForwardChaining[i].idPenyakit,
        idGejala: dataRuleForwardChaining[i].idGejala[x]
      })
    }
  }

  for (let n = 0; n < data.length; n++) {
    if (data[n].select) {
      for (let i = 0; i < newDataRule.length; i++) {
        for (let s = 0; s < matchDataRule.length; s++) {
          if (data[n].idGejala == newDataRule[i].idGejala && matchDataRule[s].idPenyakit == newDataRule[i].idPenyakit) {
            matchDataRule[s].idGejala.push(data[n].idGejala)
          }
        }
      }
    }
  }

  for (let i = 0; i < newDataIdPenyakit.length; i++) {
    const findDataRule = dataRuleForwardChaining.find((state) => state.idPenyakit == newDataIdPenyakit[i])

    const findMatchDataRule = matchDataRule.find((state) => state.idPenyakit == newDataIdPenyakit[i])

    dataForwardChaining.push({
      idPenyakit: newDataIdPenyakit[i],
      countDataRule: findDataRule.idGejala.length,
      countMatchDataRule: findMatchDataRule.idGejala.length,
      isDiagnosa: findDataRule.idGejala.length == findMatchDataRule.idGejala.length ? true : false
    })
  }

  resolve(dataForwardChaining)
})

export const setMetode = ({ namaAnak, formDiagnosa, navigate }) => async (dispatch, getState) => {
  try {
    const dataGejala = getState().MetodeStore.dataGejala
    const dataPenyakit = getState().MetodeStore.dataPenyakit
    const dataPengetahuan = getState().MetodeStore.dataPengetahuan
    const dataRuleForwardChaining = getState().MetodeStore.dataRuleForwardChaining

    // fuzzy tsukamoto
    const dataFuzzifikasi = await fuzzifikasi(formDiagnosa)

    const dataInferensi = await inferensi(dataFuzzifikasi, dataGejala, dataPenyakit, dataPengetahuan)

    const dataDefuzifikasi = await defuzifikasi(dataInferensi)

    //forward chaining
    const dataForwardChaining = await forwardChaining(formDiagnosa, dataRuleForwardChaining)

    const tsukamoto = {
      fuzzifikasi: dataFuzzifikasi,
      inferensi: dataInferensi,
      defuzifikasi: dataDefuzifikasi.toFixed(2)
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

    if (isNaN(tsukamoto.defuzifikasi)) {
      // Tidak ada jenis diagnosa yang sesuai dengan gejala terpilih
      ToastAndroid.show('Maaf, kuesioner yang kamu isi tidak ada di basis pengetahuan sistem kami', ToastAndroid.SHORT);
    } else {
      dispatch(registerUser({ namaAnak, diagnosa, tsukamoto, dataForwardChaining, navigate }))
    }
  } catch (error) {
    console.log(error)
    ToastAndroid.show(error, ToastAndroid.SHORT);
  }
}