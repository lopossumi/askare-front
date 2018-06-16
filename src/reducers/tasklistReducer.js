import tasklistService from '../services/tasklist'
import taskService from '../services/task'

const tasklistReducer = (store = [], action) => {
    switch (action.type) {
        case 'INIT':
            return action.tasklists
        case 'CREATE_TASKLIST':
            return [...store, action.tasklist]
        case 'DELETE_TASKLIST':
            return store.filter(x => x._id !== action.id)
        case 'EDIT_TASKLIST':
            return store.map(x => x._id !== action.tasklist._id
                ? x
                : action.tasklist)
        case 'RECYCLE_TASKLIST':
            return store.map(x => (x._id !== action.id) ? x : { ...x, recycled: true })
        default:
            return store
    }
}

export const createTasklist = (tasklist) => {
    return async (dispatch) => {
        try {
            const myList = await tasklistService.create(tasklist)
            dispatch({
                type: 'CREATE_TASKLIST',
                tasklist: myList
            })
        } catch (error) {
            console.log(error.response.data)
        }
    }
}

export const editTasklist = (tasklist) => {
    return async (dispatch) => {
        try {
            // Could dispatch first with unvalidated data to seem more responsive?
            // Must be able to alert user if saving changes fails for some reason.

            const myList = await tasklistService.edit(tasklist)
            dispatch({
                type: 'EDIT_TASKLIST',
                tasklist: myList
            })
        } catch (error) {
            console.log(error.response.data)
        }
    }
}

export const deleteTasklist = (id) => {
    return async (dispatch) => {
        try {
            await tasklistService.remove(id)
            dispatch({
                type: 'DELETE_TASKLIST',
                id
            })
        } catch (error) {
            console.log(error.response.data)
        }
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

        try {
            const tasklists = await tasklistService.getAll()
            const tasks = await taskService.getAll()

            dispatch({
                type: 'INIT',
                tasklists,
                tasks
            })
        } catch (error) {
            console.log(error.response.data)
        }
    }
}

export default tasklistReducer