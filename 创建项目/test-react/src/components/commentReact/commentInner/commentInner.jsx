import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./index.css"
class commentInner extends Component {
    //给组件类指定属性
    static propTypes = {
        item: PropTypes.object.isRequired, //必传参数
        deleteData: PropTypes.func.isRequired, //必传参数
        index: PropTypes.number.isRequired, //必传参数
    };
    deleteItem = () => {
        const { item, deleteData, index } = this.props
        console.log(index, "090")
        //先提示在删除
        if (window.confirm(`确定删除${item.name}的评论吗?`)) {
            deleteData(index)
        }
    }
    render() {
        const { item } = this.props
        return (
            <li className="detail-item">
                <div>
                    <span className="user-name">{`${item.name}说:`}</span>
                    {/* 获取index的方式 */}
                    <button className="deleteBtn" onClick={this.deleteItem}>删除</button>
                </div>
                <div>{item.info}</div>
            </li>
        );
    }
}

export default commentInner;