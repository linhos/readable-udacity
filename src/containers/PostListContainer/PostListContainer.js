//React
import React, { Component } from 'react'
//Redux
import { connect } from 'react-redux'
//actions
import {postCommentFetchData, itemsFetchData, postVoteDownAction, postVoteUpAction, sortByScoreAction} from '../../actions'
//components
import PostListComponent from '../../components/PostListComponent'


class PostListContainer extends Component {

    componentDidMount() {
        this.props.fetchData('http://localhost:3001/posts')
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

        this.props.postVoteUpAction(value)
    }

    onclickVoteDown = value => {
        
        fetch(`http://localhost:3001/posts/${value}`, {
            headers: { 'Authorization': 'mi-fake-header' }, 
            method: 'POST',
            body: JSON.stringify({
                option: 'downVote'
              })
          })
          .then(response => response.json())
          .then( (response ) => {
            console.log("Vote updated successfully");
        });

        this.props.postVoteDownAction(value)
    }

    onClickSortByScore = (value, posts) => {
        this.props.sortByScoreAction(value, this.props.state.posts.posts)
    }

    render () {
        return (
            <PostListComponent 
                posts = {this.props.state.posts.posts} 
                voteUp = {this.onClickVoteUp} 
                voteDown = {this.onclickVoteDown} 
                sortByScore = {this.onClickSortByScore}
                countComments = {this.props.postCommentFetchData} />
        )
    }

}

const mapStateToProps = state => {
    return {state}
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(itemsFetchData(url)),
        postVoteUpAction: (value) => dispatch(postVoteUpAction(value)),
        postVoteDownAction: (value) => dispatch(postVoteDownAction(value)),
        sortByScoreAction: (value, posts) => dispatch(sortByScoreAction(value, posts)),
        postCommentFetchData: (value) => dispatch(postCommentFetchData(value)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostListContainer)