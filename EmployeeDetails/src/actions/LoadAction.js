import { isEmpty } from 'lodash'

export const USER_LOAD='USER_LOAD',
             USER_SUCCESS='USER_SUCCESS',
             USER_FAILURE='USER_FAILURE'


export const loadAction =(data) => {
  if( isEmpty(data) ) {
    return{
      type:USER_LOAD,
        payload:{}
        }
      } else if( data.userName ==='hruday@gmail.com' && data.password ==='hruday123' ){
         return{
         type:USER_SUCCESS,
         payload:{}
        }
      } else {
        return{
        type:USER_FAILURE,
        payload:{}
      }
    }
  }
