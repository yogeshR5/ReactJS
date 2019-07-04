import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import renderField from './renderField'
import {bindActionCreators} from 'redux'
import { loadAction } from '../actions/LoadAction'

class LoginForm extends Component {
  
  componentWillReceiveProps(props){
    if(props.user.result.user && props.user.result.user.length) {
      props.history.push('/myDashboard')
    }
  }

   onSubmit=(data)=> {
     this.props.loadAction(data)
   }

   render(){
     const { handleSubmit } = this.props;
     return(
          <div className="login-page">
            <form className="login-form" onSubmit={handleSubmit(this.onSubmit)} >
              <div className="form-group">
               <Field name="userName" type ="email" classname='form-control' label='Username' placeholder='email' component={renderField} />
              </div>
              <div className="form-group">
              <Field  name="password" type ="password" classname='form-control' label='Password' placeholder='password' component={renderField} />
            </div>
            <div className="form-group">
              <button type ="submit" className='form-control'> Submit </button>
           </div>
          </form>
          <div className='error-msg'>
            {this.props.user.error ? <span>{this.props.user.error}</span>:''}
          </div>
         </div>
        )
      }
    }

 const mapStateToProps = state =>{
  return {
    user:state.user.loadData
  }
 }

const mapDispatchToProps = (dispach) =>{
  return bindActionCreators({loadAction},dispach)
}

LoginForm = reduxForm({
  form: 'loginForm'
})(LoginForm)

export default withRouter (connect(mapStateToProps, mapDispatchToProps) (LoginForm));
