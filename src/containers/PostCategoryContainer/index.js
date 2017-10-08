
import React, {Component} from 'react'
//Redux
import {connect} from 'react-redux'
//actions
import {PostCategoryListAction} from '../../actions'
import PostCategoryComponent from '../../components/PostCategoryComponent'


class PostCategoryContainer extends Component {

    componentDidMount(){
        fetch(`http://localhost:3001/redux/posts`,{
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
        })
    }

    componentWillReceiveProps (nextProps) {
        console.log(this.props)
        //if(nextProps.props.match.params.id !== this.props.props.match.params.id)
            //this.fetchTicketsDepartamentos(nextProps.props.match.params.id)
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