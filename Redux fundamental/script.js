import {createStore} from 'redux'

const initialState={
    post:0,
    age:26,
    name:"arjun"
}

const INCREMENT='post/increment'
const DECREMENT='post/decrement'
const INCREASE_BY='post/increase_by'
const DECREASE_BY='post/decrease_by'

const reducer=(state=initialState,action)=>{
    switch(action.type){

        case INCREMENT:
        return {...state,post:state.post+1}
        case DECREMENT:
            return {...state,post:state.post-1}
        case INCREASE_BY:
             return {...state,post: state.post+action.payload} 
        case DECREASE_BY:
                return {...state,post:state.post-action.payload}
      default: return state
    }
}

const store =createStore(reducer)

store.subscribe(()=>{
    console.log(store.getState())
})

store.dispatch({type:INCREMENT})
store.dispatch({type:DECREMENT})
store.dispatch({type:INCREASE_BY,payload:10})
store.dispatch({type:DECREASE_BY,payload:10})



// console.log(store.getState())