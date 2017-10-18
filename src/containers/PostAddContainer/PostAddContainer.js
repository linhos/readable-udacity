import React, {Component} from 'react'
import {connect} from 'react-redux'


import PostAddComponent from '../../components/PostAddComponent'

//actions
import {postAddAction} from '../../actions'



class PostAddContainer extends Component {

    render (){
        return (
            <PostAddComponent />
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