import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import App from './App';
// 给全局提供组件可以操作的store对象
import { Provider } from 'react-redux'
import store from './store'

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById('root'));





// 在浏览器端开启一个本地服务器，对浏览器的文件进行缓存，可以加块页面的加载速度。
serviceWorker.unregister();
