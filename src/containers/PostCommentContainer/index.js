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

    onclickVoteDown = value => {
        this.props.commentVoteDownAction(value)
    }

    onclickVoteUp = value => {
        this.props.commentVoteUpAction(value)
    }

    render () {
        return (
            <PostCommentComponent 
                comments={this.props.state.posts.comments } 
                voteUp = {this.onClickVoteUp} 
                voteDown = {this.onclickVoteDown}
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