import React, { Component } from 'react'
import './Home.scss'
import AppBanner from '../../common/AppBanner.tsx'
import NavUI from './components/NavUI'


import bannerData from './data/indexbanner.json'

import store from '../../store'
import { requestChannelData, setIndexBanners } from './store/actions.js'
import { connect } from 'react-redux'


class Home extends Component{

    getWrapLeft = ()=>{
        let {channels} = this.props;
        return (
            <div className="wrap-left">
                <nav className="top-nav">
                    <li className="fa fa-newspaper-o active">为你推荐</li>
                    <li className="fa fa-thumbs-o-up">近期热门</li>
                    <li className="fa fa-globe">最新内容</li>
                </nav>
                <NavUI data={channels}/>
            </div>
        )
    }

    getWrapCenter = ()=>{
        let {banners} = this.props;
        return (
            <div className="wrap-center">
                <div className="swiper-container" ref="banner">
                    <div className="swiper-wrapper">
                    {
                        banners.map((item, index)=>{
                            return (
                                <div key={item.id} className="swiper-slide">
                                    <img alt="" src={item.bannerUrl}/>
                                    <p>{item.title}</p>
                                </div>
                            )
                        })
                    }
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </div>
        )
    }

    getWrapRight = ()=>{
        return (
            <div className="wrap-right"></div>
        )
    }

    render(){
        console.log('render:');
        console.log(this.props);
        return (
            <div className="page" id="home">
                <AppBanner/>
                <div className="wrap">
                    {this.getWrapLeft()}
                    {this.getWrapCenter()}
                    {this.getWrapRight()} 
                </div>
            </div>
        )
    }


    componentDidMount(){
        //请求左边侧边栏的频道数据
        this.props.dispatchChannels();

        // 请求中间的轮播图数据
        this.props.dispatchIndexBanners();

    }

    componentDidUpdate(){
        //创建轮播图
        new window.Swiper(this.refs.banner, {
            autoplay: true,
            loop: true,
            pagination: {
                el: '.swiper-pagination',
            }
        })
    }

}

const mapStateToProps = function(state){
    console.log('mapStateToProps:');
    //将全局的store中的state值，转为组件的props
    return {
        channels: state.home.channels,
        banners: state.home.banners
    };
}


const mapDispatchToProps = function(dispatch){
// 将dispatch方法，转为组件的props上可以访问方法
    return {
        //这个函数转为了组件的props上的函数
        dispatchIndexBanners(){
            //通过dispach设置值
            let action = setIndexBanners(bannerData.data);
            dispatch(action);
        },
        dispatchChannels(){
            // 通过dispatch发送一个请求
            dispatch(requestChannelData());
        }
    }
}

//使用组件时，将全局的state值，转为组件的props属性
// 将dispatch可执行的方法，转为props属性
export default connect(mapStateToProps, mapDispatchToProps)(Home);