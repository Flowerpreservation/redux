import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider}from 'react-redux'; // 组件
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware, compose} from 'redux';
import reducers from './redux/index'
import thunk from 'redux-thunk';
//判断调试工具是否存在
const reduxDevTools = (window as any).devToolsExtension ? (window as any).devToolsExtension() : (f: any) => f;
// 调试工具
const store = createStore(reducers, compose(applyMiddleware(thunk), reduxDevTools));
// console.log(store.getState());
ReactDOM.render(
  <React.StrictMode>
   <Provider store={store}>
      <App />
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
