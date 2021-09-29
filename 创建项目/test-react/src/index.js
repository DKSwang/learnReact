/*
 * @Author: xxuzhong.wang
 * @Date: 2021-09-21 08:50:56
 * @LastEditors: xuzhong.wang
 * @LastEditTime: 2021-09-28 08:54:41
 * @Description: 
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CommentReact from "./components/commentReact/comment"
import KeySearch  from "./components/searchComponent/searchApp"
import PubSub  from "./components/pubSub/searchApp"
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* 评论组件 */}
    {/* <CommentReact/> */}
    {/* 关键词搜索 */}
    {/* <KeySearch/> */}
    <PubSub/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
