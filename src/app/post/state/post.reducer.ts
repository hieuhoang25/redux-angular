import { createReducer, on } from "@ngrx/store"
import { addPost, getPosts } from "./post.action"
import {initialState} from './post.state'


const _postReducer = createReducer(
    initialState,
    on(getPosts, (state)=>{
        return {
            ...state,
            getPosts: state.posts
        }
    }),
    on(addPost, (state,action)=>{
        let post = {...action.post};
        return {
            ...state,
            posts: [ ...state.posts, post]
        }
    })

)

export function postReducer(state: any, action: any){
    return _postReducer(state, action)
}