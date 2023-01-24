import React, { useState } from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';



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


function App() {


  const [todos, setTodos] = useState(defaultTodos);
  const [searchValue, setStateValue] = useState('');

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
    setTodos(newTodos);
    /* newTodos[todoIndex] = {
      text: todos[todoIndex].text,
      completed: true,
    }; */
  }

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
    /* newTodos[todoIndex] = {
      text: todos[todoIndex].text,
      completed: true,
    }; */
  }

  return (
    <React.Fragment>

      <TodoCounter total={totalTodos} completed={completedTodos} />      

      <TodoSearch searchValue={searchValue} setStateValue={setStateValue} />

      <TodoList>        
        {searchedTodos.map(todo => (
          <TodoItem 
            key={todo.id} 
            text={todo.text} 
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>      

      <CreateTodoButton />

    </React.Fragment>
  );
}

export default App;