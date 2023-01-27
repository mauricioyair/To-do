import React, { createContext, useState } from "react";
import { useLocalStorage } from "./useLocalStore";

const TodoContext = createContext();

function TodoProvider(props) {

  const { item: todos, saveItem: saveTodos, loading, error } = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = useState('');

  //Estado Modal
  const [openModal, setOpenModal] = useState(false);

  //Contar cuantos todos estan completados
  const completedTodos = todos.filter(todos => !!todos.completed).length;
  const totalTodos = todos.length;


  let searchedTodos = [];

  if (!searchValue >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLocaleLowerCase();
      return todoText.includes(searchText);
    });
  }


  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
    /* newTodos[todoIndex] = {
      text: todos[todoIndex].text,
      completed: true,
    }; */
  }

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
    /* newTodos[todoIndex] = {
      text: todos[todoIndex].text,
      completed: true,
    }; */
  }

  return(
    <TodoContext.Provider value={{
      loading,
      error,
      totalTodos,
      completedTodos,
      searchValue,
      setSearchValue,
      searchedTodos,
      completeTodo,
      deleteTodo,
      openModal, 
      setOpenModal
    }}>
      {props.children}
    </TodoContext.Provider>

  )
}

export { TodoContext, TodoProvider };