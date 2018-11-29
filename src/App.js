import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';

// 头部
import AppHeader from './common/AppHeader.tsx'
// 底部
import AppFooter from './common/AppFooter.tsx'
// 页面
import Home from './pages/home/Home.tsx'
import Questions from './pages/questions/Questions.tsx'
import Blogs from './pages/blogs/Blogs.tsx'
import Lives from './pages/lives/Lives.tsx'


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">

          <AppHeader/>
        
          <Route exact path="/" component={Home}/>
          <Route path="/questions" component={Questions}/>
          <Route path="/blogs" component={Blogs}/>
          <Route path="/lives" component={Lives}/>

          <AppFooter/>
          
        </div>
      </Router>
    );
  }
}

export default App;
