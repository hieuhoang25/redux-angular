import { createReducer, on } from "@ngrx/store";
import { initialState } from "./counter.state";
import { changeChanelName, customIncrement, decrement, increment, reset } from "./couter.action";
const _counterReducer = createReducer(
    initialState,
    on(increment, (state)=>{
        return{
            ...state,
            counter: state.counter+1,
        }
    }),
    on(decrement, (state)=>{
        return {
            ...state,
            counter: state.counter-1,
        }
    }
    )
    ,
    on(reset, (state)=>{
        return {
            ...state,
            counter:0,
        }
    })
    ,
    on(customIncrement, (state, action)=>{
        console.log(action)
        console.log(customIncrement)
        return {
            ...state,
            counter: action.value + state.counter
        }
    })
    ,
    on(changeChanelName, (state)=> {
        return{
            ...state,
            chanelName: 'Hoang Van Hieu'
        }
    })

);
export function counterReducer(state: any, action: any) {
    return _counterReducer(state, action);
}