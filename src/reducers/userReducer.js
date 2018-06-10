import userService from '../services/user'

const userReducer = (store = null, action) => {
    switch (action.type) {
        case 'LOGIN':
            return action.data
        case 'LOGOUT':
            window.localStorage.setItem('loggedUser', '')
            window.location.reload()
            return null
        case 'EDIT_USER':
            return action.data
        default:
            return store
    }
}

export const login = (user) => {
    return async (dispatch) => {
        dispatch({
            type: 'LOGIN',
            data: user
        })
    }
}

export const editUser = (user) => {
    return async (dispatch) => {
        dispatch({
            type: 'EDIT_USER',
            data: user
        })
    }
}

export const deleteUser = (user) => {
    return async (dispatch) => {
        userService.setToken(user.token)
        await userService.remove(user)
        
        setTimeout(()=> {
            dispatch({
                type: 'LOGOUT',
            })    
        }, 2000)
    }
}

export default userReducer