const taskReducer = (store = [], action) => {
    switch (action.type) {
        case 'INIT':
            return action.tasks
        case 'CREATE_TASK':
            return [...store, action.task]
        case 'REMOVE_TASK':
            return store.filter(x => x._id !== action.id)
        case 'EDIT_TASK':
            return store.map(x => x._id !== action.task._id ? x : action.task)
        case 'REMOVE_TASKLIST':
            return store.filter(x => x.tasklist !== action.id)
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

export const editTask = (task) => {
    return {
        type: 'EDIT_TASK',
        task
    }
}

export const createTask = (task) => {
    return {
        type: 'CREATE_TASK',
        task
    }
}

export default taskReducer