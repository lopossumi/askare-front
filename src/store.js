import { createStore, combineReducers, applyMiddleware } from 'redux'
// import notificationReducer from './reducers/notificationReducer'
// import filterReducer from './reducers/filterReducer'
import taskListReducer from './reducers/taskListReducer'
import userReducer from './reducers/userReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

const reducer = combineReducers({
    taskLists: taskListReducer,
    user: userReducer
})

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)

export default store