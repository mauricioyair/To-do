import React from "react";
import { Check, Cancel } from 'iconoir-react';
import './TodoItem.css';


function TodoItem(props) {

  const onComplete = () => {
    alert('Completaste el to-do' + " " +props.text);
  }

  const onDelete = () => {
    alert('Borraste el to-do' +  " " +props.text);
  }

  return (
    <li className="TodoItem">
      <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`} onClick={onComplete}>        
        <Check/>
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <span className="Icon Icon-delete" onClick={onDelete}>
        <Cancel height={18} width={18} />
      </span>
    </li>
  )
}

export { TodoItem };