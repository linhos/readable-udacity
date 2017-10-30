

export const POST_LIST_SUCCESS = 'POST_LIST_SUCCESS'

export const POST_LIST_PENDING = 'POST_LIST_PENDING'

export const POST_COMMENT_SUCCESS = 'POST_COMMENT_SUCCESS'

export const POST_COMMENT_PENDING = 'POST_COMMENT_PENDING'

export const COMMENT_VOTE_UP = 'COMMENT_VOTE_UP'

export const COMMENT_VOTE_DOWN = 'COMMENT_VOTE_DOWN'

export const POST_VOTE_UP = 'POST_VOTE_UP'

export const POST_VOTE_DOWN = 'POST_VOTE_DOWN'

export const POST_DETAIL_VOTE_UP = 'POST_DETAIL_VOTE_UP'

export const POST_DETAIL_VOTE_DOWN = 'POST_DETAIL_VOTE_DOWN'

export const POST_DETAIL_SUCCESS = 'POST_DETAIL_SUCCESS'

export const POST_DETAIL_PENDING = 'POST_DETAIL_PENDING'

export const COMMENT_EDIT_SUCCESS = 'COMMENT_EDIT_SUCCESS'

export const COMMENT_EDIT_PENDING = 'COMMENT_EDIT_PENDING'

export const POST_CATEGORY_LIST = 'POST_CATEGORY_LIST'

export const SORT_BY_SCORE = 'SORT_BY_SCORE'

export const COMMENTS_LIST_SUCCESS = 'COMMENTS_LIST_SUCCESS'

export const COMMENTS_LIST_PENDING = 'COMMENTS_LIST_PENDING'

export const POST_ADD = 'POST_ADD'

export const EDIT_PENDING = 'EDIT_PENDING'

export const EDIT_SUCCESS = 'EDIT_SUCCESS'

export const DELETE_POST_SUCCESS = 'DELETE_POST_SUCCESS'

export const DELETE_POST_PENDING = 'DELETE_POST_PENDING'


export function postListSuccessAction (posts) {
    return {
        type: POST_LIST_SUCCESS,
        posts
    }
}

export function postListPendingAction (bool) {
    return {
        type: POST_LIST_PENDING,
        pending: bool
    }
}

export const postCommentSuccessAction = (comments, postId) => {
    return {
        type: POST_COMMENT_SUCCESS,
        comments,
        postId
    }
}

export function postCommentPendingAction (bool) {
    return {
        type: POST_COMMENT_PENDING,
        pending: bool
    }
}

export const commentVoteUpAction = commentId => {
    return {
        type: COMMENT_VOTE_UP,
        commentId
    }
}

export const commentVoteDownAction = commentId => {
    return {
        type: COMMENT_VOTE_DOWN,
        commentId
    }
}

export const postVoteUpAction = postId => {
    return {
        type: POST_VOTE_UP,
        postId
    }
}

export const postVoteDownAction = postId => {
    return {
        type: POST_VOTE_DOWN,
        postId
    }
}

export const postDetailVoteUpAction = postId => {
    return {
        type: POST_DETAIL_VOTE_UP,
        postId
    }
}

export const postDetailVoteDownAction = postId => {
    return {
        type: POST_DETAIL_VOTE_DOWN,
        postId
    }
}

export function postDetailSuccessAction (post) {
    return {
        type: POST_DETAIL_SUCCESS,
        post
    }
}

export function postDetailPendingAction (bool) {
    return {
        type: POST_DETAIL_PENDING,
        pending: bool
    }
}

export function commentEditSuccessAction (comment) {
    return {
        type: COMMENT_EDIT_SUCCESS,
        comment
    }
}

export function commentEditPendingAction (bool) {
    return {
        type: COMMENT_EDIT_PENDING,
        pending: bool
    }
}

export const PostCategoryListAction = categoryPosts => {
    return {
        type: POST_CATEGORY_LIST,
        categoryPosts
    }
}

export const sortByScoreAction = (sort, posts) => {
    return {
        type: SORT_BY_SCORE,
        posts
    }
}

export function commentsSuccessAction (comments) {
    return {
        type: COMMENTS_LIST_SUCCESS,
        comments
    }
}

export function commentsPendingAction (bool) {
    return {
        type: COMMENTS_LIST_PENDING,
        pending: bool
    }
}


export const postAddAction = post => {
    return {
        type: POST_ADD,
        post
    }
}

export const editPendingAction = commentId => {
    return {
        type: EDIT_PENDING,
        commentId
    }
}

export const editSuccessAction = comment => {
    
    return {
        type: EDIT_SUCCESS,
        comment
    }
}

export const deletePostSuccessAction = posts => {
    
    return {
        type: DELETE_POST_SUCCESS,
        posts
    }
}

export function deletePostPendingAction (bool) {
    return {
        type: DELETE_POST_PENDING,
        pending: bool
    }
}


export function postDetailFetchData(url) {
    return (dispatch) => {
        dispatch(postDetailPendingAction(true));

        fetch(url, {headers: { 'Authorization': 'mi-fake-header' }})
            .then((response) => {
                dispatch(postDetailPendingAction(false));

                return response;
            })
            .then((response) => response.json())
            .then((item) => dispatch(postDetailSuccessAction(item)))
    };
}


export function deletePost(postId) {
    return (dispatch) => {
        dispatch(deletePostPendingAction(true));

        fetch(`http://localhost:3001/posts/${postId}/`, {headers: {  method: "DELETE", 'Authorization': 'mi-fake-header' }})
            .then((response) => {
                dispatch(deletePostPendingAction(false));
                return response;
            })
            .then((response) => response.json())
            .then((items) =>  {
                console.log(items)
                dispatch(deletePostSuccessAction(items))

            })
    };
}

export function commentEditFetchData(commentId) {
    return (dispatch) => {
        dispatch(commentEditPendingAction(true));

        fetch(`http://localhost:3001/comments/${commentId}/`, {headers: { 'Authorization': 'mi-fake-header' }})
            .then((response) => {
                dispatch(commentEditPendingAction(false));

                return response;
            })
            .then((response) => response.json())
            .then((item) =>  dispatch(commentEditSuccessAction(item)))
    };
}

export function itemsFetchData(url) {
    return (dispatch) => {
        dispatch(postListPendingAction(true));

        fetch(url, {headers: { 'Authorization': 'mi-fake-header' }})
            .then((response) => {
                dispatch(postListPendingAction(false));

                return response;
            })
            .then((response) => response.json())
            .then((items) => {
                items.map(item => {
                    dispatch(postCommentFetchData(item.id))
                })
                dispatch(postListSuccessAction(items))
            })
    };
}

export function postCommentFetchData(postId) {
    return (dispatch) => {
        dispatch(postCommentPendingAction(true));

        fetch(`http://localhost:3001/posts/${postId}/comments/`, {headers: { 'Authorization': 'mi-fake-header' }})
            .then((response) => {
                dispatch(postCommentPendingAction(false));

                return response;
            })
            .then((response) => response.json())
            .then((items) =>  dispatch(postCommentSuccessAction(items.length, postId)))
    };
}

export function commentsFetchData(postId) {
    return (dispatch) => {
        dispatch(commentsPendingAction(true));

        fetch(`http://localhost:3001/posts/${postId}/comments/`, {headers: { 'Authorization': 'mi-fake-header' }})
            .then((response) => {
                dispatch(commentsPendingAction(false));

                return response;
            })
            .then((response) => response.json())
            .then((items) =>  dispatch(commentsSuccessAction(items, postId)))
    };
}


export function editCommentPut(commentId, value) {
    return (dispatch) => {

        dispatch(editPendingAction(true));

        let timestamp = new Date().toDateString()

        fetch(`http://localhost:3001/comments/${commentId}/`, 
            {
                method: "PUT", 
                headers: { 
                 'Authorization': 'mi-fake-header',
                 'Content-Type': 'application/json' }, 
                 body: JSON.stringify({ timestamp: timestamp,  body: value })
            })
            .then((response) => {
                dispatch(editPendingAction(false));
                return response;
            })
            .then((response) => response.json())
            .then(
                comment =>  {
                    dispatch(editSuccessAction(comment))
                }
            )
    };
}
