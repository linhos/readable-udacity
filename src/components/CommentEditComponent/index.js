
import React, {Component} from 'react'
import serializeForm from 'form-serialize'
import { Link } from 'react-router-dom';


class CommentEditComponent extends Component {

    // Iniciamos el estado
    constructor(props) {
        super(props);

        this.state = { 
            message: false,
            body: ''
        }
    }

    onSubmit = (e) => { 
        
        e.preventDefault();
        const values = serializeForm(e.target, {hash: true})

        this.props.editCommentPut(this.props.comment.id, values.body)
    }

    handleBodyChange = (e) => {
        this.setState({
            body : e.target.value
        });
    }

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

    renderTable() {
        if (this.props.isLoading ) {
            return '<p>Loading ...</p>';
        } else {
            return (
                <span>
                <div className="row">
                <div className="col">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link className="btn btn-link btn-sm" to={`/posts`} >Home</Link></li>
                        <li className="breadcrumb-item"><Link className="btn btn-link btn-sm" to={`/posts`} >Posts</Link></li>
                    </ol>
                </div>
            </div>
                <hr />
                {this.renderMessage()}
                <div className="row">
                <form onSubmit={ this.onSubmit } >
                    
                <div className="form-group"> 
                    <label htmlFor="title">Body</label>
                    <textarea 
                    rows="3" 
                    name="body" 
                    id="body" 
                    defaultValue={this.props.comment.body} 
                    onChange={this.handleBodyChange}>
                    </textarea>
                </div>

                    <p className="align-center"><input className="btn-primary" type="submit" value="Edit Comment"/></p>
                </form>
                </div>
            </span>
            )
        }
    }


    render () {
        return (
            this.renderTable()
        )
    }
}

export default CommentEditComponent;