import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { BaseLayout } from './components/Baselayout';
import Search from './components/Search'
import SearchResult from './components/SearchResult'
import NewsResult from './components/NewsResult'
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './stores/reducer';
import cors from 'cors'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { Router, Route, Switch } from 'react-router-dom'
import history from './utils/history'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(
  applyMiddleware(thunk) 
))


ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <Router history = {history}>
        <BaseLayout>
          <Switch>
           <Route exact path = "/" component = {Search} />
           <Route exact path = "/search/:searchparam" component = {SearchResult} />
           <Route exact path = "/news/:searchparam" component = {NewsResult} />
          </Switch>
        </BaseLayout>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
