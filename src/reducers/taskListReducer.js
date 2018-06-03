import taskListService from '../services/taskList'

const taskListReducer = (store = [], action) => {
    switch (action.type) {
        case 'INIT_TASKLISTS':
            return action.data
        case 'CREATE_TASKLIST':
            return [action.taskList, ...store]
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

export const initialize = () => {
    return async (dispatch) => {
        const taskLists = await taskListService.getAll()

        dispatch({
            type: 'INIT_TASKLISTS',
            data: taskLists
        })
    }
}

export default taskListReducer