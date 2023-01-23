import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';



const todos = [
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
  return (
    <React.Fragment>

      <TodoCounter />      

      <TodoSearch />

      <TodoList>        
        {todos.map(todo => (
          <TodoItem 
            key={todo.id} 
            text={todo.text} 
            completed={todo.completed}
          />
        ))}
      </TodoList>      

      <CreateTodoButton />

    </React.Fragment>
  );
}

export default App;