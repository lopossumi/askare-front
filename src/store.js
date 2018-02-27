import { createStore, applyMiddleware } from 'redux'
// import notificationReducer from './reducers/notificationReducer'
// import filterReducer from './reducers/filterReducer'
import taskReducer from './reducers/taskReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

// const reducer = combineReducers({
//   notifications: notificationReducer,
//   filter: filterReducer
// })

const store = createStore(
    taskReducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)

export default store