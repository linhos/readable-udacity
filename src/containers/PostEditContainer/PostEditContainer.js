//React
import React, {Component} from 'react'
//Component
import PostEditComponent from '../../components/PostEditComponent'
//Redux
import {connect} from 'react-redux'
//Action
import { postDetailFetchData } from '../../actions'
import {api} from '../../actions/constants'


class PostEditContainer extends Component {

    componentDidMount() {
        this.props.postDetailFetchData(`${api}/posts/${this.props.props.match.params.id}/`)
    }

    render (){
        return (
            <PostEditComponent post = {this.props.state.posts.post} />
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


export default connect (mapStateToProps, mapDispatchToProps)(PostEditContainer)
