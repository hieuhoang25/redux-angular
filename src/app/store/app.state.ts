import { AuthState } from "../auth/state/auth.state";
import { counterReducer } from "../counter/state/counter.reducer";
import { CounterState } from "../counter/state/counter.state";
import { postReducer } from "../post/state/post.reducer";
import { PostSate } from "../post/state/post.state";
// for calling the state global
export interface AppState{
    counter: CounterState;
    post: PostSate,
    auth: AuthState
}
// for embeded to module
export const appReducer = {
    counter: counterReducer,
    post: postReducer
}