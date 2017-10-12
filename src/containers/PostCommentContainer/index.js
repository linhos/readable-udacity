import React, {Component} from 'react'

import {connect} from 'react-redux'

import PostCommentComponent from '../../components/PostCommentComponent'

class PostCommentContainer extends Component {

    componentDidMount()
    {
        
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

export default connect(mapStateToProps)(PostCommentContainer)