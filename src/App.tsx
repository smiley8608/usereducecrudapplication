import React, { FormEvent, useContext, useReducer, useState } from 'react';

import './App.css';
import UseReducer from './Hook/useReducer';
// import { TodoContext } from './Hook/useReducer';

function App() {
  // const {initialState,reducer}:any=useContext(TodoContext)
  // console.log(initialState);
  
 
  // const [todos,dispatch]:any=useReducer(reducer,initialState)

  
  return (
    <div >
      <UseReducer />
      
    </div>
  );
}

export default App;
