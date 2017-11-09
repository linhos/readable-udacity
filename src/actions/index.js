import * as types from './types.js';

export function postListSuccessAction (posts) {
    return {
        type: types.POST_LIST_SUCCESS,
        posts
    }
}

export function postListPendingAction (bool) {
    return {
        type: types.POST_LIST_PENDING,
        pending: bool
    }
}

export const postCommentSuccessAction = (comments, postId) => {
    return {
        type: types.POST_COMMENT_SUCCESS,
        comments,
        postId
    }
}

export function postCommentPendingAction (bool) {
    return {
        type: types.POST_COMMENT_PENDING,
        pending: bool
    }
}

export const commentVoteUpAction = commentId => {
    return {
        type: types.COMMENT_VOTE_UP,
        commentId
    }
}

export const commentVoteDownAction = commentId => {
    return {
        type: types.COMMENT_VOTE_DOWN,
        commentId
    }
}

export const postVoteUpAction = postId => {
    return {
        type: types.POST_VOTE_UP,
        postId
    }
}

export const postVoteDownAction = postId => {
    return {
        type: types.POST_VOTE_DOWN,
        postId
    }
}

export const postDetailVoteUpAction = postId => {
    return {
        type: types.POST_DETAIL_VOTE_UP,
        postId
    }
}

export const postDetailVoteDownAction = postId => {
    return {
        type: types.POST_DETAIL_VOTE_DOWN,
        postId
    }
}

export function postDetailSuccessAction (post) {
    return {
        type: types.POST_DETAIL_SUCCESS,
        post
    }
}

export function postDetailPendingAction (bool) {
    return {
        type: types.POST_DETAIL_PENDING,
        pending: bool
    }
}

export function commentEditSuccessAction (comment) {
    return {
        type: types.COMMENT_EDIT_SUCCESS,
        comment
    }
}

export function commentEditPendingAction (bool) {
    return {
        type: types.COMMENT_EDIT_PENDING,
        pending: bool
    }
}

export const PostCategoryListAction = categoryPosts => {
    return {
        type: types.POST_CATEGORY_LIST,
        categoryPosts
    }
}

export const sortByScoreAction = (sort, posts) => {
    return {
        type: types.SORT_BY_SCORE,
        posts
    }
}

export function commentsSuccessAction (comments) {
    return {
        type: types.COMMENTS_LIST_SUCCESS,
        comments
    }
}

export function commentsPendingAction (bool) {
    return {
        type: types.COMMENTS_LIST_PENDING,
        pending: bool
    }
}


export const postAddAction = post => {
    return {
        type: types.POST_ADD,
        post
    }
}

export const editPendingAction = commentId => {
    return {
        type: types.EDIT_PENDING,
        commentId
    }
}

export const editSuccessAction = comment => {
    
    return {
        type: types.EDIT_SUCCESS,
        comment
    }
}

export const deletePostSuccessAction = posts => {
    
    return {
        type: types.DELETE_POST_SUCCESS,
        posts
    }
}

export function deletePostPendingAction (bool) {
    return {
        type: types.DELETE_POST_PENDING,
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
