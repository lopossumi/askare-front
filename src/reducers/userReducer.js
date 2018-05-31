const userReducer = (store = null, action) => {
    switch (action.type) {
        case 'LOGIN':
            return action.data
        case 'LOGOUT':
            return null
        default:
            return store
    }
}

export const login = (user) => {
    console.log('dispatching user ', user)
    return async (dispatch) => {
      dispatch({
        type: 'LOGIN',
        data: user
      })
    }
  }
  

export default userReducer