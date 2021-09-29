/*
 * @Author: xxuzhong.wang
 * @Date: 2021-09-28 13:41:58
 * @LastEditors: xuzhong.wang
 * @LastEditTime: 2021-09-29 09:37:41
 * @Description: 
 */
import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import App  from  "./component/app/app.jsx"
import {Route,BrowserRouter,Switch} from "react-router-dom"

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
ReactDOM.render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
      document.getElementById('root')
    );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
