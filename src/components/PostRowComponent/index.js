
import React, {Component} from 'react'

class PostRowComponent extends Component {
    render (){
        return (
            <span>
                <tr key={this.props.post.timestamp.toString()}>
                    <td>{this.props.post.id}</td>
                    <td>{this.props.post.title}</td>
                    <td>{this.props.post.author}</td>
                    <td>nº de comentarios</td>
                    <td>{this.props.post.voteScore}</td>
                    <td><button type="button" onClick={() => this.props.voteUp(post.id)} className="btn btn-primary btn-sm">Vote Up</button></td>
                    <td><button type="button" onClick={() => this.props.voteDown(post.id)} className="btn btn-danger btn-sm">Vote Down</button></td>
                    <td><Link className="btn btn-link btn-sm" to={`/posts/detail/${post.id}`} >Detail</Link></td>
                </tr>
            </span>
        )
    }
}

export default PostRowComponent;

