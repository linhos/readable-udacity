
import React, { Component } from 'react';
//React-Router-Dom
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'


//Containers
import PostListContainer from './containers/PostListContainer'
import PostDetailContainer from './containers/PostDetailContainer'
import PostCategoryContainer from './containers/PostCategoryContainer'
import PostCommentContainer from './containers/PostCommentContainer'


import logo from './logo.svg';
import './App.css';

class App extends Component {

  PostCategoryContainer = (props) => {
    return (<PostCategoryContainer props={props} />)
  }

  PostDetailContainer = (props) => {
    return (<PostDetailContainer props={props} />)
  }

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

            <Route exact path="/" render={({ history }) => (
                <PostListContainer /> 
              )}/>

              <Route exact path="/posts" render={({ history }) => (
                <PostListContainer /> 
              )}/>

              <Route exact path="/posts/detail/:id" component={this.PostDetailContainer} />

              <Route exact path="/:category/posts" component={this.PostCategoryContainer} />

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
