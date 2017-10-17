
import React, { Component } from 'react'

import { Link } from 'react-router-dom';

class PostDetailComponent extends Component {
    render () {
        return (
            <span>
                <div className="row">
                    <div className="col">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link className="btn btn-link btn-sm" to={`/posts`} >Home</Link></li>
                            <li className="breadcrumb-item"><Link className="btn btn-link btn-sm" to={`/posts`} >Posts</Link></li>
                            <li className="breadcrumb-item active">{this.props.post.title}</li>
                        </ol>
                    </div>
                </div>
                <table className="table">
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Title Detail</th>
                        <th>Author</th>
                        <th>Number of Comments</th>
                        <th>Vote Score</th>
                        <th></th>
                        <th></th>
                        <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <td>{this.props.post.id}</td>
                            <td>{this.props.post.title}</td>
                            <td>{this.props.post.author}</td>
                            <td>nº de comentarios</td>
                            <td>{this.props.post.voteScore}</td>
                            <td><button type="button" onClick={() => this.props.voteUp(this.props.post.id)} className="btn btn-primary btn-sm">Vote Up</button></td>
                            <td><button type="button" onClick={() => this.props.voteDown(this.props.post.id)} className="btn btn-danger btn-sm">Vote Down</button></td>
                        </tr>
                        
                    </tbody>
                </table>
            </span>
        )
    }
}

export default PostDetailComponent;