const taskReducer = (store = [], action) => {
    switch (action.type) {
        case 'CREATE':
            return [...store, action.task]
        default:
            return store
    }
}

export const createTask = (task) => {
    return {
        type: 'CREATE',
        task
    }
}

export default taskReducer
