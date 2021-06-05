import * as Types from '../Actions/ActionTypes'

const initialState = {
  userUID: null,
  isLoading: false,
  formRegister: {}
}

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading
      }
    case Types.LOGIN_USER:
      return {
        ...state,
        userUID: action.data.userUID
      }
    case Types.SET_FORM_REGISTER:
      return {
        ...state,
        formRegister: action.data
      }
    default:
      return state
  }
}

export default AuthReducer