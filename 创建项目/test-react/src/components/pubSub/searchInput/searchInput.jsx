import React, { Component } from 'react';
import PubSub from 'pubsub-js'
import PropTypes from 'prop-types';
class searchInput extends Component {
    // static propTypes = {
    //     getData: PropTypes.func.isRequired, //必传参数
    // }
    // constructor() {
    //     super()
    //     this.state = ({})
    // }
    state = {
        keyWords: ''
    }
    searchBtn = () => {
        console.log('990090',)
        const { keyWords } = this.state
        // this.props.getData(keyWords)
        //发布消息
        PubSub.publish('toSearch', keyWords);
    }
    inputHandler = (event) => {
        const keyWords = event.target.value
        this.setState({ keyWords })
    }

    render() {
        const { keyWords } = this.state
        return (
            <div>
                <input type="text" value={keyWords} onChange={this.inputHandler} />
                <button onClick={this.searchBtn}>搜索</button>
            </div>
        );
    }
}

export default searchInput;