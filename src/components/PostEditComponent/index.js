import React, {Component} from 'react'
import serializeForm from 'form-serialize'
import { Link } from 'react-router-dom';
import {api} from '../../actions/constants'


class PostEditComponent extends Component {

    // Iniciamos el estado
    constructor(props) {
        super(props);

        this.state = { 
            message: false,
            body: '',
            title: ''
        }
    }

    onSubmit = (e) => { 
        
        e.preventDefault();
        const values = serializeForm(e.target, {hash: true})

        fetch(`${api}/posts/${this.props.post.id}`, {
            method: "PUT",
            headers: { 'Accept': 'application/json', 'Authorization': 'mi-fake-header','Content-Type': 'application/json' }, 
        
            body: JSON.stringify({
                title: values.title,
                body: values.body,
            })
        })
        .then(response => response.json())
        .then( (response ) => {
            this.setState(state => ({
                message: 'Post edit succesfully',
            }))
    })};

    handleTitleChange = (e) => {
        this.setState({
            title : e.target.value
        });
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

    render () {
        return (
            <span>
            <hr />
            {this.renderMessage()}
            <div className="row">
              <form onSubmit={ this.onSubmit } >
                
              <div className="form-group">  
                  <label htmlFor="title">Title</label>
                  <input 
                    type="text"
                    id="title"
                    name="title"
                    defaultValue={this.props.post.title} 
                    onChange={this.handleTitleChange}/>
                </div>

                <div className="form-group"> 
                  <label htmlFor="title">Body</label>
                  <textarea 
                    rows="3" 
                    name="body" 
                    id="body" 
                    defaultValue={this.props.post.body} 
                    onChange={this.handleBodyChange}>
                  </textarea>
                </div>

                <p className="align-center"><input className="btn-primary" type="submit" value="Edit"/></p>
              </form>
            </div>
          </span>
        )
    }
}

export default PostEditComponent;