const taskReducer = (store = [], action) => {
    switch (action.type) {
        case 'INIT':
            return action.tasks
        case 'CREATE_TASK':
            return [...store, action.task]
        case 'REMOVE_TASK':
            console.log('action id', action.id)
            return store.filter(x => x._id !== action.id)
        default:
            return store
    }
}

export const removeTask = (id) => {
    return {
        type: 'REMOVE_TASK',
        id
    }
}

export const createTask = (task) => {
    return {
        type: 'CREATE_TASK',
        task
    }
}

export default taskReducer