
import React, { Component } from 'react'


class PostDetailComponent extends Component {
    render () {

        return (
            <span>
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
                        </tr>
                        
                    </tbody>
                </table>
            </span>
        )
    }
}

export default PostDetailComponent;