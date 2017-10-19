//React
import React, { Component } from 'react'
//Redux
import { connect } from 'react-redux'
//actions
import { postDetailFetchData, postDetailVoteUpAction, postDetailVoteDownAction } from '../../actions'
//components
import PostDetailComponent from '../../components/PostDetailComponent'

import PostCommentContainer from '../PostCommentContainer'


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

    render () {

        return (
            <span>
                <PostDetailComponent 
                    post = {this.props.state.posts.post} 
                    voteUp = {this.onClickVoteUp} 
                    voteDown = {this.onclickVoteDown}/>
                <hr />
                <PostCommentContainer postId = {this.props.props.match.params.id} />
            </span>
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