import React, { Component } from 'react'

import { Link, Redirect } from 'react-router-dom';


class Error404Component extends Component {

    render () {
        return (
            <span>
                <h1>ERROR 404</h1>
                <h3>Even the things we love break sometines</h3>
            </span>
        )   
    }

}

export default Error404Component;