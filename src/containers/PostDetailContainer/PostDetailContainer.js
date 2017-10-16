//React
import React, { Component } from 'react'
//Redux
import { connect } from 'react-redux'
//actions
import { postDetailFetchData } from '../../actions'
//components
import PostDetailComponent from '../../components/PostDetailComponent'

import PostCommentContainer from '../PostCommentContainer'


class PostDetailContainer extends Component {

    componentDidMount() {

        this.props.postDetailFetchData(`http://localhost:3001/posts/${this.props.props.match.params.id}/`)
    }

    render () {
        return (
            <span>
                <PostDetailComponent post = {this.props.state.posts.post} />
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
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostDetailContainer)