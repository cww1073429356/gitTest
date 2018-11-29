import 'whatwg-fetch'
import API from '../../../api'
console.log(API);

export const SET_CHANNELS_DATA = 'SET_CHANNELS_DATA';

export const SET_INDEX_BANNER_DATA = 'SET_INDEX_BANNER_DATA';



export function setChannels(value){
    return {
        type: SET_CHANNELS_DATA,
        value: value
    }
}

export function setIndexBanners(value){
    return {
        type: SET_INDEX_BANNER_DATA,
        value: value
    }
}

// 数据请求
export function requestChannelData(){
    // 当store使用thunk插件增强功能，异步函数中，就能获得dispatch。
    return function(dispatch){
        fetch(API.CHANNELS_API)
        .then(response => {
            return response.json();
        })
        .then(result => {
            dispatch(setChannels(result.data));
        })
        .catch(error => {
            console.log(error);
        })
    }
}