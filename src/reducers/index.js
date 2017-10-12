
import { combineReducers } from 'redux'

import {
    POST_LIST,
    POST_VOTE_UP,
    POST_VOTE_DOWN,
    POST_DETAIL,
    POST_CATEGORY_LIST
    
} from '../actions'

const initialState = {
    'posts': [],
    'post': [],
    'categoryPosts': []
}

function postReducer(state=initialState, action, ) {
    switch(action.type){
        case 'POST_LIST':

            return Object.assign({}, state, {
                'posts': action.posts.map(post => {
                    fetch(`http://localhost:3001/posts/${post.id}/comments`, {
                        headers: { 'Authorization': 'mi-fake-header' }
                    }).then(res=>{
                        return res.json();
                    }).then(res=>{
                       
                            let postComment = res.filter((c) => c.parentId === post.id)
                            if (postComment.length > 0){
                                post['commentsNumber'] = postComment.length;  
                            } else {
                                post['commentsNumber'] = 0;
                            }
                            
                    })
                   
                    return post;
                })
            });

       
        case 'POST_DETAIL':
            return Object.assign({}, state, {
                'post': action.post
            });
        
        case 'POST_VOTE_UP':
            let upstate = Object.assign({}, state, {});
            let up = upstate.posts.find(b => b.id === action.postId);
            up.voteScore = up.voteScore + 1
            return upstate;
        
        case 'POST_VOTE_DOWN':
            let downstate = Object.assign({}, state);
            let down = downstate.posts.find(b => b.id === action.postId);
            down.voteScore = down.voteScore - 1
            return downstate;

        case 'POST_CATEGORY_LIST':
            return Object.assign({}, state, {
                'categoryPosts': action.categoryPosts
            })    
        
        default: {
            return state;
        }
    }
}



export default combineReducers({
    'posts': postReducer
})