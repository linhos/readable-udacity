import React, {Component, PropTypes} from 'react'

class PostAddComponent extends Component {

      // Iniciamos el estado
    constructor(props) {
        super(props);

        this.state = { value: '' }
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.value);
      }

    render (){
        return <form onSubmit={ this.onSubmit }>
        <label htmlFor="title">Title</label>
        <input type="text" className="form-group" name="title"
          id="title" defaultValue={ this.props.title }/>
        <p className="align-center"><input className="button-primary" type="submit" value="Add"/></p>
      </form>;
    }

}

export default PostAddComponent;