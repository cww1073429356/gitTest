import React, { Component } from 'react'
import './AppBanner.scss'

export default class AppBanner extends Component{

    state = {
        isShow: true
    }
    
    render(){
        let {isShow} = this.state;
        return (
            <div className="app-banner" style={{display: isShow?'':'none'}}>
                <div className="wrap">
                    <h3>在 SegmentFault，学习技能、解决问题</h3>
                    <p>每个月，我们帮助 1000 万的开发者解决各种各样的技术问题。并助力他们在技术能力、职业生涯、影响力上获得提升。</p>
                </div>
                <span className="fa fa-times-circle" onClick={this.closeAction}></span>
            </div>
        )
    }

    closeAction = ()=>{
        this.setState({isShow: false});
    }
    
}