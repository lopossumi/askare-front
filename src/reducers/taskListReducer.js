import taskListService from '../services/taskList'
import taskService from '../services/task'

const taskListReducer = (store = [], action) => {
    switch (action.type) {
        case 'INIT':
            return action.taskLists
        case 'CREATE_TASKLIST':
            return [action.taskList, ...store]
        case 'REMOVE_TASKLIST':
            return store.filter(x => x._id !== action.id)
        default:
            return store
    }
}

export const createTaskList = (taskList) => {
    return {
        type: 'CREATE_TASKLIST',
        taskList
    }
}

export const removeTaskList = (id) => {
    return {
        type: 'REMOVE_TASKLIST',
        id
    }
}

export const initialize = (user) => {
    return async (dispatch) => {
        taskListService.setToken(user.token)
        taskService.setToken(user.token)

        const taskLists = await taskListService.getAll()
        const tasks = await taskService.getAll()

        dispatch({
            type: 'INIT',
            taskLists,
            tasks
        })
    }
}

export default taskListReducer