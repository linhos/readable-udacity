
import React, {Component} from 'react'
//Redux
import {connect} from 'react-redux'
//actions
import {PostCategoryListAction} from '../../actions'
import PostCategoryComponent from '../../components/PostCategoryComponent'


class PostCategoryContainer extends Component {

    componentDidMount(){
        this.fetchPostsCategory(this.props.props.match.params.category)
    }    
    
    componentWillReceiveProps (nextProps) {
        if(nextProps.props.match.params.category !== this.props.props.match.params.category)
            this.fetchPostsCategory(nextProps.props.match.params.category)
    }

    fetchPostsCategory(category) {
        fetch(`http://localhost:3001/${category}/posts`, {
            headers: { 'Authorization': 'mi-fake-header' }
        })
        .then(res=>{
            return res.json()
        })
        .then(res=>{
            this.props.dispatch(PostCategoryListAction(res))
        })
        .catch(err => {
            console.log(err)
        });
    }

    render (){
        return (
            <PostCategoryComponent posts  = {this.props.state.posts.categoryPosts} />
        )
    }
}

const mapStateToProps = state => {
    return {state}
}

export default connect(mapStateToProps)(PostCategoryContainer)