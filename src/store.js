import { createStore, combineReducers, applyMiddleware } from 'redux'
import taskListReducer from './reducers/taskListReducer'
import userReducer from './reducers/userReducer'
import taskReducer from './reducers/taskReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

const reducer = combineReducers({
    taskLists: taskListReducer,
    user: userReducer,
    task: taskReducer
})

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)

export default store