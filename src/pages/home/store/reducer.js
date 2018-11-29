import homeState from './state'
import { SET_CHANNELS_DATA, SET_INDEX_BANNER_DATA } from './actions'

// 1.如果需要修改数据，需要返回一个新的state值
// 2.如果没有修改，返回原来的state
export default function(state = homeState, action){
    // console.log('home:', action.type);

    switch (action.type) {
        //设置home左边栏的channels数据
        case SET_CHANNELS_DATA:
            return {...state, channels: action.value};
        // 设置home中间轮播图数据：
        case SET_INDEX_BANNER_DATA:
            return {...state, banners: action.value};
        // 其他情况
        default:
            return state;
    }
}