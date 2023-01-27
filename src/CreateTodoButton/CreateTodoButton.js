import React from "react";
import { Plus } from 'iconoir-react';
import './CreateTodoButton.css';

function CreateTodoButton( {setOpenModal} ) {

  const onClickButton = () => {
    setOpenModal(prevState => !prevState);
  }
  
  return(
      <button className="CreateTodoButton" onClick={ onClickButton }>
        <Plus/>
      </button>
  )
}

export { CreateTodoButton };