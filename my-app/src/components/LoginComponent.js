import React,{useReducer,useState,useEffect} from "react";


const LoginComponent = () => {
  const intialState={count:0}
  const [state,dispatch]=useReducer(reducer,intialState)
  function reducer(state,action){

    switch (action.type){
      case 'increment':
        return {count:state.count+1}
      case 'decrement':
          return {count :state.count-1}
      default:
        throw new Error()

    }
  }
  return (
    <>
      <h1
        className="
    text-primary"
      >
        {" "}
        this is LoginComponent
      </h1>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })} className="btn btn-primary">+</button>
      <button onClick={() => dispatch({ type: 'decrement' })} className="btn btn-danger">-</button>
    </>
  );
};
export default LoginComponent;
