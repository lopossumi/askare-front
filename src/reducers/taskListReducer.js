//import test_data from './test_data'
import taskListService from '../services/taskList'

const taskListReducer = (store = [], action) => {
    switch (action.type) {
        case 'INIT':
            return action.data
        case 'CREATE':
            return [...store, action.taskList]
        default:
            return store
    }
}

export const createTaskList = (taskList) => {
    return {
        type: 'CREATE',
        taskList
    }
}

export const initialize = () => {
    return async (dispatch) => {
        const taskLists = await taskListService.getAll()

        dispatch({
            type: 'INIT',
            data: taskLists
        })
    }
}

export default taskListReducer