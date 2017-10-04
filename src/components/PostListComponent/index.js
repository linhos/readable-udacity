
import React, { Component } from 'react'

class PostListComponent extends Component {

    render () {
        return (
            <span>
            <table className="table">
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Number of Comments</th>
                    <th>Vote Score</th>
                    <th></th>
                    <th></th>
                    <th></th>
                    </tr>
                </thead>
                <tbody>
                    
                    {this.props.posts && this.props.posts.map((post) => (
                        <tr key={post.timestamp.toString()}>
                            <td>{post.id}</td>
                            <td>{post.title}</td>
                            <td>{post.author}</td>
                            <td>nº de comentarios</td>
                            <td>{post.voteScore}</td>
                            <td><button type="button" onClick={() => this.props.voteUp(post.id)} className="btn btn-primary btn-sm">Vote Up</button></td>
                            <td><button type="button" onClick={() => this.props.voteDown(post.id)} className="btn btn-danger btn-sm">Vote Down</button></td>
                            <td><button type="button" className="btn btn-link btn-sm">Edit</button></td>
                        </tr>
                    ))}
                    
                </tbody>
            </table>
        </span>
        )
    }

}

export default PostListComponent;