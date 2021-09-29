import React, { Component } from 'react';
import Search from "./searchInput/searchInput"
import List from "./showList/showList"
class searchApp extends Component {
    // constructor() {
    //     super()
    //     this.state = ({})
    // }
    state = {
        receiveData: ''
    }
    getData = (data) => {
        console.log(data, "909090")
        const receiveData = data
        this.setState({
            receiveData
        })
    }


    render() {
        const { receiveData } = this.state
        return (
            <div>
                <Search getData={this.getData} />
                <List receiveData={receiveData} />
            </div>
        );


    }
}

export default searchApp;