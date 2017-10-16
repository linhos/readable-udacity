//React
import React, { Component } from 'react'
//Redux
import { connect } from 'react-redux'
//actions
import {postCommentFetchData, itemsFetchData, postVoteDownAction, postVoteUpAction, sortByAuthorAction} from '../../actions'
//components
import PostListComponent from '../../components/PostListComponent'


class PostListContainer extends Component {

    componentDidMount() {
        this.props.fetchData('http://localhost:3001/posts')
    }

    onClickVoteUp = value => {
        this.props.postVoteUpAction(value)
    }

    onclickVoteDown = value => {
        this.props.postVoteDownAction(value)
    }

    onClickSortByAuthor = (value, posts) => {
        this.props.sortByAuthorAction(value, this.props.state.posts.posts)
    }

    render () {
        return (
            <PostListComponent 
                posts = {this.props.state.posts.posts} 
                voteUp = {this.onClickVoteUp} 
                voteDown = {this.onclickVoteDown} 
                sortByAuthor = {this.onClickSortByAuthor}
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
        sortByAuthorAction: (value, posts) => dispatch(sortByAuthorAction(value, posts)),
        postCommentFetchData: (value) => dispatch(postCommentFetchData(value)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostListContainer)