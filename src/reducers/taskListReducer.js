const myTask1 = {
    id: '9872344324',
    title: 'My first task title',
    content: 'This is a markdown flavoured thing.\n## Second level header\nLorem ipsum.\n### Third level header\nsuch is cool wow',
    priority: 4,
    status: 3,
    list: '8273'
}

const myTask2 = {
    id: '918346722',
    title: 'my second task title',
    content: '# Header 1\n[Link to google](http://www.google.com)\n## Header 2 \nSome content lorem ipsum-esque',
    priority: 2,
    status: 2,
    list: '8273'
}

const myTaskList = {
    id: '8273',
    tasks: [
        myTask1,
        myTask2
    ],
    title: 'My tasklist',
    owner: 'teppo'
}

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
        //const taskLists = await taskListService.getAll()
        const taskLists = [myTaskList]
        console.log(taskLists)
        
        dispatch({
            type: 'INIT',
            data: taskLists
        })
    }
}

export default taskListReducer