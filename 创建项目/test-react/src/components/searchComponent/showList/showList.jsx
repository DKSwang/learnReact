import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Axios from "axios"
class showList extends Component {
    static propTypes = {
        receiveData: PropTypes.string.isRequired, //必传参数
    }
    // constructor(props) {
    //     super(props)

    // }
    state = {
        initView: true,
        loading: false,
        users: null,
        errorMsg: null
    }
    //react17的先函数,用来替代componentWillReceiveProps
    // static getDerivedStateFromProps = (nextProps, prevState) => {
    //     if (nextProps.receiveData !== prevState.receiveData) {
    //         return {
    //             receiveData: nextProps.receiveData,
    //         };
    //     }
    //     return null;
    // }
    // 在componentDidUpdate中进行异步操作，驱动数据的变化
    componentWillReceiveProps(newprops) {
        const { receiveData } = newprops
        const searchName = receiveData
        //请求钱更新状态
        this.setState({
            initView: false,
            loading: true,
        })

        const url = `https://api.github.com/search2/repositories?q=${searchName}`
        Axios.get(url)
            .then(res => {
                //获取相应数据
                const result = res.data.items
                //取出想要的数据写法一
                // const finalData = result.map((item => {
                //     return { name: item.name, html_url: item.html_url }
                // }))
                //取出想要的数据写法二
                const finalData = result.map((item => ({ name: item.name, html_url: item.html_url })))
                //更新状态
                this.setState({
                    initView: false,
                    loading: false,
                    users: finalData
                })

                console.log(result, "shuju", this.state)
            })
            .catch(error => {
                console.log(error, "90")
                this.setState({
                    loading: false,
                    errorMsg: error.message
                })
            })

    }
    componentDidUpdate() {
        this.getDataList(this.props.receiveData);

    }
    getDataList = (params) => {
        console.log(params, "params")

    }



    render() {
        const { initView, loading, users, errorMsg } = this.state
        const { receiveData } = this.props
        if (initView) {
            return <h2>请输入关键字搜索-{receiveData}</h2>

        } else if (loading) {
            return <h2>数据加载中</h2>
        } else if (errorMsg) {
            return <h2>{errorMsg}</h2> //
        } else {
            return (
                <div>
                    {

                        users.map((items, index) => {
                            console.log(items, "items")
                            return (
                                <div div key={index} >
                                    <a href={items.html_url} target="_blank">
                                        <img style={{ width: 100 }} src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fbpic.588ku.com%2Felement_origin_min_pic%2F19%2F03%2F15%2F75076c485081d15ed9c224ad3e4ce4a1.jpg&refer=http%3A%2F%2Fbpic.588ku.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1634980577&t=2513b29b8c362ff105b89f9eb7789fd4" alt="" />
                                    </a>
                                    <p>{items.name}</p>
                                </div>
                            )
                        })


                        //     users.map((item, index) => {
                        //     <div div key={index} >
                        //         <a href={item.html_url} target="_blank">
                        //             <img style={{ width: 100 }} src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fbpic.588ku.com%2Felement_origin_min_pic%2F19%2F03%2F15%2F75076c485081d15ed9c224ad3e4ce4a1.jpg&refer=http%3A%2F%2Fbpic.588ku.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1634980577&t=2513b29b8c362ff105b89f9eb7789fd4" alt="" />
                        //         </a>
                        //         <p>{item.name}</p>
                        //     </div>
                        //    })
                    }

                </div>
            );
        }

    }
}

export default showList;