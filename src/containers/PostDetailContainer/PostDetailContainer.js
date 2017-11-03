//React
import React, { Component } from 'react'
//Redux
import { connect } from 'react-redux'

import { push } from 'react-router-redux';

//actions
import { postDetailFetchData, postDetailVoteUpAction, postDetailVoteDownAction } from '../../actions'
//components
import PostDetailComponent from '../../components/PostDetailComponent'
import Error404Component from '../../components/Error404Component'
import PostCommentContainer from '../PostCommentContainer'

import history from '../../history' 


class PostDetailContainer extends Component {

    componentDidMount() {
        this.props.postDetailFetchData(`http://localhost:3001/posts/${this.props.props.match.params.id}/`)
    }

    onClickVoteUp = value => {
        fetch(`http://localhost:3001/posts/${value}`, {
            headers: { 'Accept': 'application/json', 'Authorization': 'mi-fake-header','Content-Type': 'application/json' }, 
            method: 'POST',
            body: JSON.stringify({
                option: 'upVote'
              })
          })
          .then(response => response.json())
          .then( (response ) => {
            console.log("Vote updated successfully");
        });

        this.props.postDetailVoteUpAction(value)
    }

    onclickVoteDown = value => {
        
        fetch(`http://localhost:3001/posts/${value}`, {
            headers: { 'Accept': 'application/json', 'Authorization': 'mi-fake-header','Content-Type': 'application/json' }, 
            method: 'POST',
            body: JSON.stringify({
                option: 'downVote'
              })
          })
          .then(response => response.json())
          .then( (response ) => {
            console.log("Vote updated successfully");
        });

        this.props.postDetailVoteDownAction(value)
    }

    onClickDelete = value => {
        fetch(`http://localhost:3001/posts/${value}`, {
            headers: { 'Accept': 'application/json', 'Authorization': 'mi-fake-header','Content-Type': 'application/json' }, 
            method: 'DELETE',
          })
          .then(response => response.json())
          .then( (response ) => {
            console.log("Post Delete successfully");
            this.props.props.history.push('/')
            
        });

       
    }

    renderTable () {
        
        if (this.props.state.posts.post.error || Object.keys(this.props.state.posts.post).length === 0) {
            return <Error404Component />;
          } else {
              return (<span>
              <PostDetailComponent 
                  post = {this.props.state.posts.post} 
                  voteUp = {this.onClickVoteUp} 
                  voteDown = {this.onclickVoteDown}
                  delete = {this.onClickDelete} />
              <hr />
              <PostCommentContainer postId = {this.props.props.match.params.id} />
          </span>)
          }
    }

    render () {
        return (
           this.renderTable()
        )
    }
}

const mapStateToProps = state => {
    return {state}
}

const mapDispatchToProps = (dispatch) => {
    return {
        postDetailFetchData: (url) => dispatch(postDetailFetchData(url)),
        postDetailVoteUpAction: (value) => dispatch(postDetailVoteUpAction(value)),
        postDetailVoteDownAction: (value) => dispatch(postDetailVoteDownAction(value)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostDetailContainer)