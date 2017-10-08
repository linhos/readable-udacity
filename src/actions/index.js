
export const postListAction = posts => {
    return {
        type: 'POST_LIST',
        posts
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