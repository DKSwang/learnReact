import React, { Component } from 'react';
import "./comment.css"
import LeftPart from "./leftPart/leftPart"
import RightPart from "./rightPart/rightPart"
class common extends Component {

    // constructor() {
    //     super()
    //     this.state = ({
    //         commentList: [
    //             {
    //                 user: '张三',
    //                 commentInner: '我搜'
    //             },
    //             {
    //                 user: '李四',
    //                 commentInner: '我搜'
    //             },
    //         ]
    //     })
    // }
    //给组件对象指定state属性
    state = {
        commentList: [
            {
                name: '张三',
                info: '我搜'
            },
            {
                name: '李四',
                info: '我搜'
            },
        ]
    }
    //新增数据
    getData = (data) => {
        console.log(data, "canshu ")
        const { commentList } = this.state
        commentList.unshift(data)
        this.setState({
            commentList
        })
    }
    //删除数据
    deleteData = (index) => {
        const { commentList } = this.state

        commentList.splice(index, 1)
        console.log(commentList, "commentList")
        this.setState({
            commentList
        })
    }
    render() {
        const { commentList } = this.state
        return (
            <div className="container">
                <div className="title">请发表对react的看法</div>
                <div className="comment-part">
                    <LeftPart getData={this.getData} />
                    <RightPart commentList={commentList} deleteData={this.deleteData} />
                </div>
            </div>
        );
    }
}

export default common;