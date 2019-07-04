import React, { Component } from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import LoginForm from './Login'
import MyDashboard from './MyDashboard'


const history = createBrowserHistory();

class App extends Component {
  render(){
    return(
          <div className="root-page">
            <Router history ={history}>
              <Switch>
               <Route exact path='/' component={LoginForm}/>
               <Route path='/myDashboard' component={MyDashboard}/>
              </Switch>
           </Router>
         </div>
       )
     }
   }

export default App
