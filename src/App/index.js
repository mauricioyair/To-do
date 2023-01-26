import React from 'react';
import { TodoProvider } from '../TodoContext';
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

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;