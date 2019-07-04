import React from 'react';
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './components/App'
import configureStore from './store'
import './assets/style.css';

const store = configureStore();

ReactDom.render(
            <Provider store={store}>
              <Router>
               <App store={store}/>
             </Router>
            </Provider>,
          document.getElementById('root'))
