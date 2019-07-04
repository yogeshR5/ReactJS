import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class MyDashboard extends Component {
    render() {
      const { user } =this.props.user
       return(
        <div className="dashboard-page">
         <span className="employee-header">{ user ? 'Employee Details' : '' } </span>
           { user ? user.map((value,key)=>(
            <div className="list-data" key={key}>
             <ul>
              <li>ID:{value.id}</li>
              <li> name:{value.name}</li>
               <li> Age:{value.age}</li>
               <li> Gender:{value.gender}</li>
               <li> Email:{value.email}</li >
              </ul>
            </div>
           )) : <div className="form-group">Session Expired Please Click to <Link to={'/'}>login </Link> </div> }
        </div>
      )
   }
 }
 const mapStateToProps = state =>{
  return {
    user:state.user.loadData.result
  }
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps) (MyDashboard);
