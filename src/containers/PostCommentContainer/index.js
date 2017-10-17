import React, {Component} from 'react'

import {connect} from 'react-redux'

import PostCommentComponent from '../../components/PostCommentComponent'

//actions
import {postCommentFetchData} from '../../actions'


class PostCommentContainer extends Component {

    componentDidMount()
    {
        this.props.postCommentFetchData(this.props.postId)
    }

    fetchPostComments() {

    }

    render () {
        return (
            <PostCommentComponent />
        )
    }

}

const mapStateToProps = state => {
    return {state}
}

const mapDispatchToProps = (dispatch) => {
    return {
        postCommentFetchData: (url) => dispatch(postCommentFetchData(url)),
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(PostCommentContainer)