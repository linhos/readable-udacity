import React, {Component} from 'react'

import {connect} from 'react-redux'

import PostCommentComponent from '../../components/PostCommentComponent'
import CommentAddComponent from '../../components/CommentAddComponent'

//actions
import {commentsFetchData, commentVoteDownAction, commentVoteUpAction} from '../../actions'
import {api} from '../../actions/constants'


class PostCommentContainer extends Component {

    componentDidMount()
    {
        this.props.commentsFetchData(this.props.postId)
    }


    onClickVoteDown = value => {
        fetch(`${api}/comments/${value}`, {
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

    onClickDelete = value => {
        fetch(`${api}/comments/${value}`, {
            headers: { 'Accept': 'application/json', 'Authorization': 'mi-fake-header','Content-Type': 'application/json' }, 
            method: 'DELETE',
          })
          .then(response => response.json())
          .then( (response ) => {
            this.props.commentsFetchData(this.props.postId)
            console.log("Delete successfully");
        });
    }

    onClickVoteUp = value => {
        fetch(`${api}/comments/${value}`, {
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
            <span>
                
                <PostCommentComponent 
                    comments={this.props.state.posts.comments } 
                    voteUp = {this.onClickVoteUp} 
                    voteDown = {this.onClickVoteDown}
                    delete = {this.onClickDelete}
                />
                <hr />
                
                <CommentAddComponent postId = {this.props.postId}  commentsFetchData = {this.props.commentsFetchData}/>
            </span>
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