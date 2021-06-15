import * as Types from '../Actions/ActionTypes'

const initialState = {
  userUID: null,
  isDiagnosa: false,
  isLoading: false,
  user: {},
  formRegister: {}
}

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading
      }
    case Types.SET_IS_DIAGNOSA:
      return {
        ...state,
        isDiagnosa: action.isDiagnosa
      }
    case Types.LOGIN_USER:
      return {
        ...state,
        userUID: action.data.userUID,
        user: action.data.user
      }
    case Types.SET_FORM_REGISTER:
      return {
        ...state,
        formRegister: action.data.formRegister
      }
    case Types.REGISTER_USER:
      return {
        ...state,
        userUID: action.data.userUID,
        formRegister: action.data.formRegister
      }
    case Types.CLEAR_FORM_REGISTER:
      return {
        ...state,
        formRegister: {}
      }
    case Types.LOGOUT_USER:
      return {
        ...state,
        userUID: null,
        isDiagnosa: false,
        isLoading: false,
        formRegister: {}
      }
    default:
      return state
  }
}

export default AuthReducer