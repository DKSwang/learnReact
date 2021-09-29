import React, { Component } from 'react';
import { Route, BrowserRouter, Switch, NavLink, Redirect } from "react-router-dom"
import MyNavLink from "../myNavLink/myNavLink"
import "./app.css"
import Home from "../../views/home"
import About from "../../views/about"
class app extends Component {
    render() {
        return (
            <div>
                <div className="title">
                    学习react路由
                    <div>
                        <MyNavLink to="/home" >home</MyNavLink>

                    </div>
                    <div>
                        <MyNavLink to="/about">about</MyNavLink>
                    </div>
                </div>
                <div>
                    <Switch>
                        <Route path="/home" component={Home}></Route>
                        <Route path="/about" component={About}></Route>
                        <Redirect to="/home"></Redirect>
                    </Switch>

                </div>
            </div>
        );
    }
}

export default app;