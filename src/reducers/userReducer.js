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

export default userReducer