import React, { Component } from 'react';
import PropTypes from 'prop-types';

import "./index.css"
class leftPart extends Component {
    static propTypes = {
        getData: PropTypes.func.isRequired, //必传函数参数
    }
    // constructor() {
    //     super()
    //     this.state = ({
    //         name: '',
    //         info: ''
    //     })
    // }
    state = {
        name: '',
        info: ''
    }
    changeHandler = (event) => {
        //错误的写法
        //  this.setState({
        //     pwd:event.target.value
        //  })
        //正确的写法 
        const name = event.target.value //
        this.setState({ name })
    }
    infoHandler = (event) => {
        const info = event.target.value //
        this.setState({ info })
    }
    submit = (event) => {
        const { name, info } = this.state
        if (name == "" || info == "") {
            return false
        }
        const obj = this.state
        this.props.getData(obj) //将数据传到付组件
        //清除数据
        this.setState({
            name: '',
            info: ''
        })
        //阻止默认提交事件
        event.preventDefault()
    }
    render() {
        const { name, info } = this.state
        return (
            <div div className="left-part" >
                <form action="/leftPart" >
                    <div>  用户名:</div>
                    <div>
                        <input value={name} type="text" onChange={this.changeHandler.bind(this)} />
                    </div>
                    <div>   评论内容:</div>
                    <div>
                        <textarea value={info} onChange={this.infoHandler.bind(this)} rows="7" type="text" />
                    </div>
                    <button className="submitBtn" onClick={this.submit}>提交评论</button>
                </form>
            </div >
        );
    }
}

export default leftPart;