
export function postListSuccessAction (posts) {
    return {
        type: 'POST_LIST_SUCCESS',
        posts
    }
}

export function postListPendingAction (bool) {
    return {
        type: 'POST_LIST_PENDING',
        pending: bool
    }
}

export const postCommentSuccessAction = (comments, postId) => {
    return {
        type: 'POST_COMMENT_SUCCESS',
        comments,
        postId
    }
}

export function postCommentPendingAction (bool) {
    return {
        type: 'POST_COMMENT_PENDING',
        pending: bool
    }
}



export const postVoteUpAction = postId => {
    return {
        type: 'POST_VOTE_UP',
        postId
    }
}

export const postVoteDownAction = postId => {
    return {
        type: 'POST_VOTE_DOWN',
        postId
    }
}

export const postDetailAction = post => {
    return {
        type: 'POST_DETAIL',
        post
    }
}

export const PostCategoryListAction = categoryPosts => {
    return {
        type: 'POST_CATEGORY_LIST',
        categoryPosts
    }
}

export const sortByAuthorAction = (sort, posts) => {
    return {
        type: 'SORT_BY_AUTHOR',
        posts
    }
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