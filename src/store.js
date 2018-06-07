import { createStore, combineReducers, applyMiddleware } from 'redux'
import tasklistReducer from './reducers/tasklistReducer'
import userReducer from './reducers/userReducer'
import taskReducer from './reducers/taskReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

const reducer = combineReducers({
    tasklists: tasklistReducer,
    user: userReducer,
    tasks: taskReducer
})

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)

export default store