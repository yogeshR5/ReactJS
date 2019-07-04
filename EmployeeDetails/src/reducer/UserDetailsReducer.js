import { USER_SUCCESS, USER_FAILURE } from  '../actions/LoadAction'
import { UserData } from './Data'


const INITIAL_STATE= { loadData:{ result:[], error:null }}

export default function(state=INITIAL_STATE, action){
  switch(action.type) {
    case USER_SUCCESS:
    return {...state, loadData:{ result: UserData, error:null }}
    case USER_FAILURE:
    return {...state, loadData:{ result:[], error:"UserName and Password Mismatch" }}
  }
  return state;
}
