
import React, {Component} from 'react'
import serializeForm from 'form-serialize'
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

//actions
import {commentsFetchData, commentVoteDownAction, commentVoteUpAction} from '../../actions'
import {api} from '../../actions/constants'


class CommentAddComponent extends Component {

    // Iniciamos el estado
    constructor(props) {
        super(props);

        this.state = { 
            message: false,
        }
    }

    onSubmit = (e) => { 
       
        e.preventDefault();
        const values = serializeForm(e.target, {hash: true})

        let timestamp = new Date().getTime()
        let randomId = Math.random().toString(36).substring(7);

        fetch(`${api}/comments`, {
            method: "POST",
            headers: { 'Accept': 'application/json', 'Authorization': 'mi-fake-header','Content-Type': 'application/json' }, 
        
            //make sure to serialize your JSON body
        
            body: JSON.stringify({
                id: randomId,
                timestamp: timestamp,
                title: values.title,
                body: values.body,
                parentId: this.props.postId,
                author: 'carlos'
            })
        })
        .then(response => response.json())
        .then( (response ) => {
            this.setState(state => ({
                message: 'Comment created succesfully',
                comments: this.props.commentsFetchData(this.props.postId)
            }))
            console.log("Post save successfully");
    })};

    renderMessage () {
        if (this.state.message !== false) {
            return (
              <span>
                <div className="alert alert-success" role="alert">{this.state.message}</div>
                <p><Link className="btn btn-link btn-sm" to={`/posts`} >Return</Link></p>
              </span>
            )
        }
    }

    render () {
        return (
            <span>
                {this.renderMessage()}
                <div className="row">
                    <div className="card card-default">
                        <div className="card-body">
                        <h6 className="card-title">Add Comment</h6>
                            <form onSubmit={ this.onSubmit } >
                                <div className="form-group"> 
                                <label htmlFor="title">Body</label>
                                <input type="text" className="form-control" name="body" id="body" />
                                </div>
                                <p className="align-center"><input className="btn-primary" type="submit" value="Add"/></p>
                            </form>
                        </div>
                    </div>
                </div>
            </span>
        )
    }

}

const mapStateToProps = state => {
    return {state}
}

const mapDispatchToProps = (dispatch) => {
    return {
        commentsFetchData: (value) => dispatch(commentsFetchData(value)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentAddComponent)