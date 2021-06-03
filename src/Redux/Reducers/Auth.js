import * as Types from '../Actions/ActionTypes'

const initialState = {
  formRegister: {}
}

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
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