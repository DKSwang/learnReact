import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CommentInner from "../commentInner//commentInner"
import "./index.css"
class rightPart extends Component {
    //给组件类指定属性
    static propTypes = {
        deleteData: PropTypes.func.isRequired, //必传参数
        commentList: PropTypes.array.isRequired, //必传参数
    };
    // constructor(props) {
    //     super(props)
    //     this.state = ({
    //         commentList: props.commentList
    //     })
    //     this.delete = this.delete.bind(this)
    // }
    render() {
        const { commentList, deleteData } = this.props
        //计算出数据长度
        const display = commentList.length === 0 ? 'block' : 'none'
        return (
            <div>
                <div className="show-comment">
                    <h2 style={{ display }}>暂无评论,请点击右侧增加</h2>
                    <ul>

                        {
                            commentList.length > 0 ?
                                commentList.map((item, index) => {
                                    return <CommentInner item={item} index={index} key={index} deleteData={deleteData} />
                                }) : <div>暂无评论展示</div>
                        }

                    </ul>
                </div>
            </div>
        );
    }
}
//校验参数方法一:
// rightPart.propTypes = {
//     commentList: PropTypes.array.isRequired, //必传参数
// };
export default rightPart;