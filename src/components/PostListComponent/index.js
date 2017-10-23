import React, { Component } from 'react'

import { Link, Redirect } from 'react-router-dom';


class PostListComponent extends Component {

    renderTable() {
        if (!this.props.posts || this.props.posts.length === 0) {
          return null;
        } else {
          return <table className="table table-striped table-responsive">
          <thead className="thead-light">
              <tr>
              <th>Title</th>
              <th>Body</th>
              <th>Author</th>
              <th>Category</th>
              <th>Comments</th>
              <th>
                <button type="button" onClick={() => this.props.sortByScore('DESC')} className="btn btn-danger btn-sm">
                    Vote Score
                </button>
              </th>
              <th></th>
              <th></th>
              <th></th>
              </tr>
          </thead>
          <tbody>
            {this.props.posts && this.props.posts.map((post) => (
                <tr key={ post.timestamp
                    ? post.timestamp.toString()
                    : post.id+post.author
                }>
                <td><Link className="btn btn-link btn-sm" to={`/posts/detail/${post.id}/`} >{post.title} <i className="fa fa-info-circle" aria-hidden="true"></i></Link></td>
                <td>{post.body}</td>
                <td>
        
                        {post.author}
                </td>
                <td>
                    <Link className="btn btn-link btn-sm" to={`/${post.category}/posts`} >
                        {post.category}
                    </Link>
                </td>
                <td>
                    {post.commentsNumber}
                </td>
                <td>{post.voteScore}</td>
                <td><button type="button" onClick={() => this.props.voteUp(post.id)} className="btn btn-primary btn-sm">Vote Up</button></td>
                <td><button type="button" onClick={() => this.props.voteDown(post.id)} className="btn btn-warning btn-sm">Vote Down</button></td>
                <td><button type="button" onClick={() => this.props.delete(post.id)} className="btn btn-danger btn-sm">Delete</button></td>
            </tr>
                   
            ))}
            </tbody>
          </table>;
        }
      }

    render () {
        return (
            <span>
                {this.renderTable()}
            </span>
        )
    }

}

export default PostListComponent;