
import React, { Component } from 'react';
//React-Router-Dom
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'


//Containers
import PostListContainer from './containers/PostListContainer'
import PostDetailContainer from './containers/PostDetailContainer'
import PostCategoryContainer from './containers/PostCategoryContainer'
import PostCommentContainer from './containers/PostCommentContainer'
import PostAddContainer from './containers/PostAddContainer'

import logo from './logo.svg';
import './App.css';

class App extends Component {

  PostCategoryContainer = (props) => {
    return (<PostCategoryContainer props={props} />)
  }

  PostAddContainer = (props) => {
    return (<PostAddContainer props={props} />)
  }

  PostDetailContainer = (props) => {
    return (<PostDetailContainer props={props} />)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          
          <h1 className="App-title"></h1>
        </header>
        <div className="container">
          <div className="row">
            <div className="col">

              <Route exact path="/posts/add" component={this.PostAddContainer} />


              <Route exact path="/posts/detail/:id" component={this.PostDetailContainer} />
              
              
              <Route exact path="/:category/posts" component={this.PostCategoryContainer} />

              
              <Route exact path="/posts" render={({ history }) => (
                <PostListContainer /> 
              )}/>

              

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
