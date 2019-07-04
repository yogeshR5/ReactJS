import { createStore } from 'redux'
import  thunk from 'redux-thunk'
import rootReducer from '../reducer'

const configureStore = () => createStore(rootReducer)

export default configureStore
