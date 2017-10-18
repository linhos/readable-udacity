import React, {Component} from 'react'
import serializeForm from 'form-serialize'

class PostAddComponent extends Component {

  onSubmit = (e) => { 

      e.preventDefault();

      const values = serializeForm(e.target, {hash: true})

      console.log(values)

      let timestamp = new Date().getTime()

      fetch(`http://localhost:3001/posts`, {
          method: "POST",
          headers: { 'Accept': 'application/json', 'Authorization': 'mi-fake-header','Content-Type': 'application/json' }, 
      
          //make sure to serialize your JSON body
      
          body: JSON.stringify({
            id: 'asdf090c0c09bn09b0b',
            timestamp: timestamp,
            title: values.title,
            body: values.body,
            category: 'redux',
            author: 'carlos'
          })
        })
        .then(response => response.json())
        .then( (response ) => {
          console.log("Post save successfully");
    })};

    render (){
      return (
        <div className="row">
          <form onSubmit={ this.onSubmit } >
            <div className="form-group">  
              <label htmlFor="title">Title</label>
              <input type="text" className="form-group" name="title" id="title" />
            </div>
            <div className="form-group"> 
              <label htmlFor="title">Body</label>
              <input type="text" className="form-group" name="body" id="body" />
            </div>
            <p className="align-center"><input className="btn-primary" type="submit" value="Add"/></p>
          </form>
        </div>
      )
    }

}

export default PostAddComponent;