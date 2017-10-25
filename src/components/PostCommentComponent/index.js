
import React, {Component} from 'react'
import { Link } from 'react-router-dom';


class PostCommentComponent extends Component {

    // Iniciamos el estado
    constructor(props) {
        super(props);

        this.state = { 
            message: false,
        }
    }

    render (){

        return (
            <span>
            <table className="table">
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Body</th>
                        <th>Vote Score</th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    
                    {this.props.comments && this.props.comments.map((post) => (
                        <tr key={post.timestamp.toString()}>
                            <td>{post.author}</td>
                            <td>{post.body}</td>
                            <td>{post.voteScore}</td>
                            <td><button type="button" onClick={() => this.props.voteUp(post.id)} className="btn btn-primary btn-sm">Vote Up</button></td>
                            <td><button type="button" onClick={() => this.props.voteDown(post.id)} className="btn btn-warning btn-sm">Vote Down</button></td>
                            <td><Link className="btn btn-link btn-sm" to={`/comments/edit/${post.id}/`} >Edit Comment</Link></td>
                            <td><button type="button" onClick={() => this.props.delete(post.id)} className="btn btn-danger btn-sm">Delete</button></td>
                        </tr>
                    ))}
                    
                </tbody>
            </table>
        </span>
        )
    }
}

export default PostCommentComponent;