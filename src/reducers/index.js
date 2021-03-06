
import { combineReducers } from 'redux'

import {
    POST_LIST,
    POST_VOTE_UP,
    POST_VOTE_DOWN,
    POST_DETAIL_PENDING,
    POST_DETAIL_SUCCESS,
    POST_CATEGORY_LIST,
    POST_LIST_SUCCESS,
    POST_LIST_PENDING,
    POST_COMMENT_PENDING,
    POST_COMMENT_SUCCESS,
    SORT_BY_SCORE,
    COMMENT_EDIT_SUCCESS,
    COMMENT_EDIT_PENDING,
    DELETE_POST_PENDING,
    DELETE_POST_SUCCESS
} from '../actions'

const initialState = {
    'posts': [],
    'post': [],
    'comments': [],
    'comment': [],
    'categoryPosts': [],
    'sort': 'DESC',
    isLoading: true
}

function postReducer(state=initialState, action, ) {
    switch(action.type){

        case 'SORT_BY_SCORE':
            let sortState = Object.assign({}, state, {});
            if (sortState.sort == 'DESC' ){
                sortState.sort = 'ASC'
                sortState.posts.sort((a,b) => a.voteScore > b.voteScore)   
            } else {
                sortState.posts.sort((a,b) => a.voteScore < b.voteScore)
                sortState.sort = 'DESC'
            }
            return sortState;

        case 'POST_LIST_PENDING':

            return {
                ...state,
                
            }

        case 'POST_DELETE_PENDING':
        
            return {
                ...state,
                isLoading: true
        
            }  
        
        case 'POST_DELETE_PENDING':
        
            return Object.assign({}, state, {
                'posts': action.posts
                
            });
            

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
            cUp.commentsNumber = action.comments
       
        case 'POST_DETAIL_PENDING':
        
            return {
                ...state,
                isLoading: true
           
            }
            
        case 'POST_DETAIL_SUCCESS':
        
            return Object.assign({}, state, {
                'post': action.post,
                'isLoading': false
            }) 
        
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

        case 'COMMENT_VOTE_UP':
            let comment = Object.assign({}, state, {});
            let co = comment.comments.find(b => b.id === action.commentId);
            co.voteScore = co.voteScore + 1
            return comment;
      
        case 'COMMENT_VOTE_DOWN':
            let commentDown = Object.assign({}, state);
            let doc = commentDown.comments.find(b => b.id === action.commentId);
            doc.voteScore = doc.voteScore - 1
            return commentDown;

        case 'POST_DETAIL_VOTE_DOWN':
            let downstateDetail = Object.assign({}, state);
            downstateDetail.post.voteScore = downstateDetail.post.voteScore - 1
            return downstateDetail;

        case 'POST_DETAIL_VOTE_UP':
            let upstateDetail = Object.assign({}, state, {});
            upstateDetail.post.voteScore = upstateDetail.post.voteScore + 1
            return upstateDetail;

        case 'POST_CATEGORY_LIST':
            return Object.assign({}, state, {
                'categoryPosts': action.categoryPosts
            })  

        case 'COMMENTS_LIST_PENDING':
        
            return {
                ...state,
                isLoading: true
            
            }
            
        case 'COMMENTS_LIST_SUCCESS':
        
            return Object.assign({}, state, {
                'comments': action.comments,
                'isLoading': false
            })

        case 'COMMENT_EDIT_PENDING':
            return {
                ...state,
                isLoading: true
            
            }
            
        case 'COMMENT_EDIT_SUCCESS':
            console.log(action.comment)
            return Object.assign({}, state, {
                'comment': action.comment,
                'isLoading': false
            })
                
        case 'EDIT_PENDING':
            return {
                ...state,
                isLoading: true
            }
        
        case 'EDIT_SUCCESS':
            console.log(action.comment)
            return Object.assign({}, state, {
                'comment': action.comment,
                'isLoading': false
            })

        default: {
            return state;
        }
    }
}



export default combineReducers({
    'posts': postReducer
})