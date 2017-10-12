//React
import React, { Component } from 'react'
//Redux
import { connect } from 'react-redux'
//actions
import { postDetailAction } from '../../actions'
//components
import PostDetailComponent from '../../components/PostDetailComponent'

import PostCommentContainer from '../PostCommentContainer'


class PostDetailContainer extends Component {

    componentDidMount() {
        
        fetch(`http://localhost:3001/posts/8xf0y6ziyjabvozdd253nd`,{
            headers: { 'Authorization': 'mi-fake-header' }
        })
        .then(res=>{
            return res.json()
        })
        .then(res=>{
            this.props.dispatch(postDetailAction(res))
        })
        .catch(err => {
            console.log(err)
        })
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

export default connect(mapStateToProps)(PostDetailContainer)