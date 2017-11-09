import React, {Component} from 'react'
import serializeForm from 'form-serialize'
import { Link } from 'react-router-dom'

class PostAddComponent extends Component {

    // Iniciamos el estado
  constructor(props) {
      super(props);
  
      this.state = { message: false }
  }

  onSubmit = (e) => { 

      e.preventDefault();

      const values = serializeForm(e.target, {hash: true})

      console.log(values)

      let timestamp = new Date().getTime()
      let randomId = Math.random().toString(36).substring(7);

      fetch(`http://localhost:3001/posts`, {
          method: "POST",
          headers: { 'Accept': 'application/json', 'Authorization': 'mi-fake-header','Content-Type': 'application/json' }, 
      
          //make sure to serialize your JSON body
      
          body: JSON.stringify({
            id: randomId,
            timestamp: timestamp,
            title: values.title,
            body: values.body,
            category: values.category,
            author: 'carlos'
          })
        })
        .then(response => response.json())
        .then( (response ) => {
          this.setState(state => ({
            message: 'Post created succesfully',
          }))
          console.log("Post save successfully");
    })};

    render (){
      if (this.state.message !== false) {
        return (
          <span>
            <div className="alert alert-success" role="alert">{this.state.message}</div>
            <div className="panel panel-default">
            <div className="panel-body">
            <Link className="btn btn-danger btn-sm" to={`/posts`} >Return</Link>
            </div>
            </div>
          </span>
        )
      }else {
        return (
          <span>
            <hr />
            <div className="row">
              <form onSubmit={ this.onSubmit } >
                <div className="form-group">  
                  <label htmlFor="title">Title</label>
                  <input type="text" className="form-control" name="title" id="title" />
                </div>
                <div className="form-group">
                  <label htmlFor="category">Category</label>
                  <select className="form-control" id="category" name="category">
                    <option key='react' value='react'>react</option>
                    <option key='redux' value='redux'>redux</option>
                  </select>
                </div>
                <div className="form-group"> 
                  <label htmlFor="title">Body</label>
                  <textarea 
                    rows="3" 
                    name="body" 
                    id="body" className="form-control">
                  </textarea>
                </div>
                <p className="align-center"><input className="btn-primary" type="submit" value="Add"/></p>
              </form>
            </div>
          </span>
        )
      }
      
    }

}

export default PostAddComponent;