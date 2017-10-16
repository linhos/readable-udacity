
import { combineReducers } from 'redux'

import {
    POST_LIST,
    POST_VOTE_UP,
    POST_VOTE_DOWN,
    POST_DETAIL,
    POST_CATEGORY_LIST,
    POST_LIST_SUCCESS,
    POST_LIST_PENDING,
    POST_COMMENT_PENDING,
    POST_COMMENT_SUCCESS,
    SORT_BY_AUTHOR,
    postCommentFetchData
    
} from '../actions'

const initialState = {
    'posts': [],
    'post': [],
    'categoryPosts': [],
    'sort': 'DESC'
}

function postReducer(state=initialState, action, ) {
    switch(action.type){

        case 'SORT_BY_AUTHOR':

                posts: action.posts.sort(function(a, b) {
                    var nameA = a.id.toUpperCase(); // ignore upper and lowercase
                    var nameB = b.id.toUpperCase(); // ignore upper and lowercase
                    if (state.sort == 'DESC') {
                        state.sort = 'ASC'
                        return 1;
                    }
                   else {
                        state.sort = 'DESC'
                        return -1;
                    }
                    
                  }); 

        case 'POST_LIST_PENDING':

            return {
                ...state,
                
            }

        case 'POST_LIST_SUCCESS':
        
            return Object.assign({}, state, {
                'posts': action.posts
                
            });

        case 'POST_COMMENT_PENDING':
        
            return {
                ...state,
                
            }
            
        case 'POST_COMMENT_SUCCESS':
            let cState = Object.assign({}, state, {});
            let cUp = cState.posts.find(b => b.id === action.postId);
            console.log(action.postId)
            console.log(action.comments)
            cUp.commentsNumber = action.comments
       
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