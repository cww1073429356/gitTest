import { createStore, combineReducers, applyMiddleware} from 'redux'
import homeReducer from '../pages/home/store/reducer'

import thunk from "redux-thunk"
//增强store中操作dispatch，原本的dispatch只可以派发对象
// 如果使用thunk，就可以派发包含异步操作的函数

const rootState = {
    userId: 'dfadasdfadfasuqoeiurqen'
};


function rootReducer(state = rootState, action){
    // console.log('root:', action.type);
    return state;
};



//将多个reducer操作合并成为了一个
const reducer = combineReducers({
    root: rootReducer,
    home: homeReducer
});




const store = createStore(reducer, applyMiddleware(thunk));
export default store;