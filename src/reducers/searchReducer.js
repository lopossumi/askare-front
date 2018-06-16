const searchReducer = (store = [], action) => {
    switch (action.type) {
        case 'SET_SEARCH':
            return action.value
        default:
            return store
    }
}

export const setSearch = (value) => {
    return async (dispatch) => {
        console.log('dispatch search with value', value)
        dispatch({
            type: 'SET_SEARCH',
            value
        })
    }
}

export default searchReducer