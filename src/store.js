import { createStore, combineReducers, applyMiddleware } from 'redux'
// import notificationReducer from './reducers/notificationReducer'
// import filterReducer from './reducers/filterReducer'
import taskListReducer from './reducers/taskListReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

const reducer = combineReducers({
  taskLists: taskListReducer
})

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)

export default store