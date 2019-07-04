
export const USER_SUCCESS='USER_SUCCESS',
             USER_FAILURE='USER_FAILURE'


    export const loadAction =(data) => {
       if(data.userName ==='hruday@gmail.com' && data.password ==='hruday123' ){
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
