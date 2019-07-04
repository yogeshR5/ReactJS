import { combineReducers } from 'redux'
import { reducer as reducerForm } from 'redux-form'
import  userDetails  from './UserDetailsReducer'


const rootReducer = combineReducers({
    form: reducerForm,
    user:userDetails
})

export default rootReducer
