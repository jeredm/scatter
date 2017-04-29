import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import NodesView from './views/nodes/NodesView';
import SetupView from './views/setup/SetupView';


const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <div>
      <App />
      <Route exact path='/' component={NodesView}/>
      <Route path='/nodes' component={NodesView}/>
      <Route path='/setup' component={SetupView}/>
    </div>
  </Router>,
  document.getElementById('root')
);
