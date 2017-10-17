
import React, {Component} from 'react'
import { Link } from 'react-router-dom';


class PostCommentComponent extends Component {

    render (){

        return (
            <span>
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Author</th>
                        <th>
                            Body
                        </th>
                        <th>
                            Vote Score
                        </th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    
                    {this.props.comments && this.props.comments.map((post) => (
                        <tr key={post.timestamp.toString()}>
                            <td></td>
                            <td>{post.author}</td>
                            <td>{post.body}</td>
                            <td>{post.voteScore}</td>
                            <td><button type="button" onClick={() => this.props.voteUp(post.id)} className="btn btn-primary btn-sm">Vote Up</button></td>
                            <td><button type="button" onClick={() => this.props.voteDown(post.id)} className="btn btn-danger btn-sm">Vote Down</button></td>
                            <td><Link className="btn btn-link btn-sm" to={`/posts/detail/${post.id}/`} >Detail</Link></td>
                        </tr>
                    ))}
                    
                </tbody>
            </table>
        </span>
        )
    }
}

export default PostCommentComponent;