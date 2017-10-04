
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