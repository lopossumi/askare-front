const userReducer = (store = null, action) => {
    switch (action.type) {
        case 'LOGIN':
            return action.data
        case 'LOGOUT':
            return null
        case 'EDIT_USER':
            return action.data
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

export const editUser = (user) => {
    console.log('dispatching user ', user)
    return async (dispatch) => {
        dispatch({
            type: 'EDIT_USER',
            data: user
        })
    }
}

export default userReducer