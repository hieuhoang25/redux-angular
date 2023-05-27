import { createAction, props } from "@ngrx/store";
import { Post } from "../model/state.model";
export const ADD_POST_ACTION = "[posts page] add post"

export const getPosts = createAction('getPosts')
export const addPost = createAction(ADD_POST_ACTION, props<{post: Post}>())