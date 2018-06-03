import taskService from '../services/task'

const taskReducer = (store = [], action) => {
    switch (action.type) {
        case 'INIT_TASKS':
            return action.data
        case 'CREATE_TASK':
            return [...store, action.task]
        default:
            return store
    }
}

export const createTask = (task) => {
    return {
        type: 'CREATE_TASK',
        task
    }
}

export const initialize = () => {
    return async (dispatch) => {
        const tasks = await taskService.getAll()

        dispatch({
            type: 'INIT_TASKS',
            data: tasks
        })
    }
}

export default taskReducer