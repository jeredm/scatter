import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './rootReducer'
import NodesView from './views/nodes/NodesView'
import SetupView from './views/setup/SetupView'
import App from './App'
import './index.css'

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  ),
)

const history = createBrowserHistory()

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <div>
        <App />
        <Route exact path='/' component={NodesView} />
        <Route path='/nodes' component={NodesView} />
        <Route path='/setup' component={SetupView} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root'),
)
