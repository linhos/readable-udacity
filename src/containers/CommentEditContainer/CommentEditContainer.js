//react
import React, {Component} from 'react'
//component
import CommentEditComponent from '../../components/CommentEditComponent'
//redux
import {connect} from 'react-redux'
//actions
import {commentEditFetchData, editCommentPut} from '../../actions'


class CommentEditContainer extends Component {

    componentDidMount() {
        this.props.commentEditFetchData(this.props.props.match.params.id)
    }

    render() {
        
        return (
            <CommentEditComponent editCommentPut = {this.props.editCommentPut} isLoading = {this.props.state.posts.isLoading} comment = {this.props.state.posts.comment } />
        )
    }

}


const mapStateToProps = state => {
    return {state}
}

const mapDispatchToProps = (dispatch) => {
    return {
        commentEditFetchData: (value) => dispatch(commentEditFetchData(value)),
        editCommentPut: (commentId, body) => dispatch(editCommentPut(commentId, body))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(CommentEditContainer);