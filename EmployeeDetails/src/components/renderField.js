import React from 'react'


const renderField =(props) =>{
  const {
    input,
    classname,
    label,
    type,
    id,
    placeHolder
    } = props
      return(
        <div>
          <label> {label} </label>
           <div>
            <input {...input} className = {classname} id = {id} type = {type} placeholder = {placeHolder} />
          </div>
        </div>
      )
    }

export default renderField;
