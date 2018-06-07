import tasklistService from '../services/tasklist'
import taskService from '../services/task'

const tasklistReducer = (store = [], action) => {
    switch (action.type) {
        case 'INIT':
            return action.tasklists
        case 'CREATE_TASKLIST':
            return [action.tasklist, ...store]
        case 'DELETE_TASKLIST':
            return store.filter(x => x._id !== action.id)
        case 'RECYCLE_TASKLIST':
            return store.map(x => (x._id !== action.id) ? x : { ...x, recycled: true })
        default:
            return store
    }
}

export const createTasklist = (tasklist) => {
    return {
        type: 'CREATE_TASKLIST',
        tasklist
    }
}

export const deleteTasklist = (id) => {
    return async (dispatch) => {
        console.log('said delete to service')
        await tasklistService.delete(id)

        dispatch({
            type: 'DELETE_TASKLIST',
            id
        })
    }
}

export const recycleTasklist = (id) => {
    return {
        type: 'RECYCLE_TASKLIST',
        id
    }
}


export const initialize = (user) => {
    return async (dispatch) => {
        tasklistService.setToken(user.token)
        taskService.setToken(user.token)

        const tasklists = await tasklistService.getAll()
        const tasks = await taskService.getAll()

        dispatch({
            type: 'INIT',
            tasklists,
            tasks
        })
    }
}

export default tasklistReducer