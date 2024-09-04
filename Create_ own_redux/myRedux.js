const myReduxStore=(reducer)=>{
let state
const listeners=[]

const store={


 getState(){
        return state
    },
    dispatch(action){
      state=reducer(state,action)
      listeners.map((listener)=>listener())

    },
    subscribe(listener){
        listeners.push(listener)

    }
    
}
store.dispatch({ type: '@@INIT' })

return store
}
export default myReduxStore