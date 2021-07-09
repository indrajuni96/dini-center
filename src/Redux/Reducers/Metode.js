import * as Types from '../Actions/ActionTypes'

const initialState = {
  dataGejala: [],
  dataPenyakit: [],
  dataPengetahuan: []
}

const MetodeReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_DATA_METODE:
      return {
        ...state,
        dataGejala: action.data.dataGejala,
        dataPenyakit: action.data.dataPenyakit,
        dataPengetahuan: action.data.dataPengetahuan
      }
    default:
      return state
  }
}

export default MetodeReducer