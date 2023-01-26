import React, { useEffect, useState } from 'react';
import { AppUI } from './AppUI';

/* 
const defaultTodos = [
  {
    id: 1,
    text: 'Ver el curso de Javascript',
    completed: true,
  },
  {
    id: 2,
    text: 'Ver el curso de React',
    completed: false,
  },
  {
    id: 3,
    text: 'Seguir el curso de React',
    completed: false,
  },
  {
    id: 4,
    text: 'Practicar el curso de React',
    completed: false,
  },
  
] 
*/

//Custom Hooks
function useLocalStorage(itemName, initialValue) {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState(initialValue);


  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
        
        if(!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = [];
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }
  
        setItem(parsedItem);
        setLoading(false);        
      } catch (error) {
        setError(error);
      }
    }, 1000);
  });


  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);      
    } catch (error) {
      setError(error);
    }
  }

  return {
    item,
    saveItem,
    loading,
    error,
  };

}



function App() {

  const { item: todos, saveItem: saveTodos, loading, error } = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = useState('');

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

  return (
    <AppUI
      loading={loading}
      error={error}
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
  
}

export default App;