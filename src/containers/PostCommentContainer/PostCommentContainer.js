import React, {Component} from 'react'

import {connect} from 'react-redux'

import PostCommentComponent from '../../components/PostCommentComponent'

//actions
import {commentsFetchData, commentVoteDownAction, commentVoteUpAction} from '../../actions'


class PostCommentContainer extends Component {

    componentDidMount()
    {
        this.props.commentsFetchData(this.props.postId)
    }

    onClickVoteDown = value => {
        fetch(`http://localhost:3001/comments/${value}`, {
            headers: { 'Accept': 'application/json', 'Authorization': 'mi-fake-header','Content-Type': 'application/json' }, 
            method: 'POST',
            body: JSON.stringify({
                option: 'downVote'
              })
          })
          .then(response => response.json())
          .then( (response ) => {
            console.log("Comment updated successfully");
        });

        this.props.commentVoteDownAction(value)
    }

    onClickVoteUp = value => {
        fetch(`http://localhost:3001/comments/${value}`, {
            headers: { 'Accept': 'application/json', 'Authorization': 'mi-fake-header','Content-Type': 'application/json' }, 
            method: 'POST',
            body: JSON.stringify({
                option: 'upVote'
              })
          })
          .then(response => response.json())
          .then( (response ) => {
            console.log("Comment updated successfully");
        });

        this.props.commentVoteUpAction(value)
    }

    render () {
        return (
            <PostCommentComponent 
                comments={this.props.state.posts.comments } 
                voteUp = {this.onClickVoteUp} 
                voteDown = {this.onClickVoteDown}
            />
        )
    }

}

const mapStateToProps = state => {
    return {state}
}

const mapDispatchToProps = (dispatch) => {
    return {
        commentsFetchData: (value) => dispatch(commentsFetchData(value)),
        commentVoteDownAction: (value) => dispatch(commentVoteDownAction(value)),
        commentVoteUpAction: (value) => dispatch(commentVoteUpAction(value))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(PostCommentContainer)