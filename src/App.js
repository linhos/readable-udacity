
import React, { Component } from 'react';
//React-Router-Dom
import { Router, Route, hashHistory } from 'react-router';

//Containers
import PostListContainer from './containers/PostListContainer'
import PostDetailContainer from './containers/PostDetailContainer'
import PostCategoryContainer from './containers/PostCategoryContainer'

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Readable Udacity</h1>
        </header>
        <div className="container">
          <div className="row">
            <div className="col">
              <Route exact path="/posts" render={({ history }) => (
                <PostListContainer /> 
              )}/>

              <Route exact path="/posts/detail/:id" render={({ history }) => (
                <PostDetailContainer /> 
              )}/>

              <Route exact path="/:category/posts" render={({ history }) => (
                <PostCategoryContainer /> 
              )}/>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
