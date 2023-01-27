import React, { useState, useContext } from 'react';
import { TodoContext } from '../TodoContext';
import './index.css'

function TodoForm(){

  const [ newTodo, setNewTodo ] = useState('');
  const { addNewTodo, setOpenModal, } = useContext(TodoContext)

  const onChange = (event) => {
    setNewTodo(event.target.value);
  }

  const onCancel = () => {
    setOpenModal(false);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    addNewTodo(newTodo); 
    setOpenModal(false);
  };

  return(
    <form onSubmit={onSubmit}>
      <label htmlFor='todo'>Ingresa tu nuevo To-do</label>
      <textarea id="todo" value={newTodo} onChange={onChange} placeholder='Ingresa tu To-do' />
      <div className="TodoForm-buttonContainer">
        <button type='button' className="TodoForm-button TodoForm-button--cancel" onClick={onCancel}>Cancelar</button>
        <button type='submit' className="TodoForm-button TodoForm-button--add">Agregar</button>
      </div>
    </form>
  )
}

export { TodoForm };