
import React, {Component} from 'react'

import {connect} from 'react-redux'

import PostAddComponent from '../../components/PostAddComponent'

//actions
import {postAddAction} from '../../actions'



class PostAddContainer extends Component {

    onSubmit = value => {
        // Realizamos la petición a la API
        var self = this;
        console.log(self)
        fetch(`http://localhost:3001/posts`,{
            headers: { 'Accept': 'application/json', 'Authorization': 'mi-fake-header','Content-Type': 'application/json' }, 
            method: 'POST',
            body: JSON.stringify({
                id: self.refs.title
            })
        })
        .then(response => response.json())
        .then( (response ) => {
          console.log("Comment updated successfully");
      });
    }

    render (){
        return (
            <PostAddComponent onSubmit={this.onSubmit}/>
        )
    }
}

const mapStateToProps = state => {
    return {state}
}

const mapDispatchToProps = (dispatch) => {
    return {
        postAddAction: (value) => dispatch(postAddAction(value)),
    };
};


export default connect(mapStateToProps)(PostAddContainer)