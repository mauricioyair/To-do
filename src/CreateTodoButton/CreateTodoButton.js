import React from "react";
import { Plus } from 'iconoir-react';
import './CreateTodoButton.css';

function CreateTodoButton() {

  const onClickButton = (msg) => {
    console.log(msg);
  }
  
  return(
      <button className="CreateTodoButton" onClick={ () => onClickButton('Click')}>
        <Plus/>
      </button>
  )
}

export { CreateTodoButton };