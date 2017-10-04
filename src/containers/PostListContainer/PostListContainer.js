//React
import React, { Component } from 'react'
//Redux
import { connect } from 'react-redux'
//actions
import {postListAction, postVoteDownAction, postVoteUpAction} from '../../actions'
//components
import PostListComponent from '../../components/PostListComponent'


class PostListContainer extends Component {

    componentDidMount() {
        this.fetchPost()
    }

    fetchPost () {
        fetch(`http://localhost:3001/posts`,{
            headers: { 'Authorization': 'mi-fake-header' }
        })
        .then(res=>{
            return res.json()
        })
        .then(res=>{
            this.props.dispatch(postListAction(res))
        })
        .catch(err => {
            console.log(err)
        })
    }

    onClickVoteUp = value => {
        this.props.dispatch(postVoteUpAction(value))
    }

    onclickVoteDown = value => {
        this.props.dispatch(postVoteDownAction(value))
    }

    render () {
        return (
            <PostListComponent 
                posts = {this.props.state.posts.posts} 
                voteUp = {this.onClickVoteUp} 
                voteDown={this.onclickVoteDown} />
        )
    }

}

const mapStateToProps = state => {
    return {state}
}

export default connect(mapStateToProps)(PostListContainer)