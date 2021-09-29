/*
 * @Author: xxuzhong.wang
 * @Date: 2021-09-28 13:41:58
 * @LastEditors: xuzhong.wang
 * @LastEditTime: 2021-09-28 13:56:00
 * @Description: 
 */
import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import About  from  "./about/about.jsx"

ReactDOM.render(
  <React.StrictMode>
    <About />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
