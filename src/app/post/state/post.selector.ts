import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PostSate } from "./post.state";


export const getPostSate = createFeatureSelector<PostSate>('post')

export const getPosts = createSelector(getPostSate, (state)=>{
    return state.posts;
})
export const getPostById = createSelector(getPostSate, (state)=>{
    return state.posts[0];
})