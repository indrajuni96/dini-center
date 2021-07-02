import { ToastAndroid } from 'react-native'
import auth from '@react-native-firebase/auth'
import database from '@react-native-firebase/database'

import * as Types from './ActionTypes'

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
        nilaiFuzzifikasi: result.toString().substring(0, 4)
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
    let dataPenyakit = []
    let dataPengetahuan = []
    let rule = []

    const responsePenyakit = await database()
      .ref('/penyakit')
      .once('value')

    const responsePengetahuan = await database()
      .ref('/pengetahuan')
      .once('value')

    const datasPenyakit = responsePenyakit.val()
    const datasPengetahuan = responsePengetahuan.val()

    for (const key in responsePenyakit.val()) {
      dataPenyakit.push({
        idPenyakit: key,
        batas: datasPenyakit[key].batas
      })
    }

  } catch (error) {
    console.log(error)
    ToastAndroid.show(error, ToastAndroid.SHORT);
  }
})

export const setTsukamoto = (data) => async (dispatch) => {
  try {
    const dataFuzzifikasi = await fuzzifikasi(data.formDiagnosa)
    console.log(dataFuzzifikasi)

    // const dataInferensi = await inferensi()
  } catch (error) {
    console.log(error)
    ToastAndroid.show(error, ToastAndroid.SHORT);
  }
}