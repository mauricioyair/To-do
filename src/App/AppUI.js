import React, { useContext } from 'react';
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoList } from '../TodoList/TodoList';
import { TodoItem } from '../TodoItem/TodoItem';
import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton';

import { TodoContext } from '../TodoContext';


function AppUI() {
  const { error, loading, searchedTodos, completeTodo, deleteTodo } = useContext(TodoContext);

  return (
    <React.Fragment>
  
      <TodoCounter />      
  
      <TodoSearch />
  
      
      <TodoList>
        
        {error && <p>Desespérate, hubo un error...</p>}
        {loading && <p>Estamos cargando, no desesperes...</p>}
        {(!loading && !searchedTodos.length) && <p>¡Crea tu primer TODO!</p>}

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

export { AppUI };