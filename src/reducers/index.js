
import { combineReducers } from 'redux'

import {
    POST_LIST,
    POST_VOTE_UP,
    POST_VOTE_DOWN,
    POST_DETAIL
    
} from '../actions'

const initialState = {
    'posts': [],
    'post': []
}

function postReducer(state=initialState, action) {
    switch(action.type){
        case 'POST_LIST':
            return Object.assign({}, state, {
                'posts': action.posts
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
        
        default: {
            return state;
        }
    }
}

export default combineReducers({
    'posts': postReducer
})