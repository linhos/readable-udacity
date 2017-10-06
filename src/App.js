
import React, { Component } from 'react';
//React-Router-Dom
import { Route } from 'react-router-dom'

//Containers
import PostListContainer from './containers/PostListContainer'
import PostDetailContainer from './containers/PostDetailContainer'

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
              <Route exact path="/posts" component={PostListContainer} />
              <Route exact path="/posts/detail/:id" component={PostDetailContainer} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
