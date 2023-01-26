import React, { useContext } from "react";
import { TodoContext } from "../TodoContext";

const estilos = {
  color: "#fff",
  fontWeight: "300",
}

function TodoCounter() {

  const { totalTodos, completedTodos } = useContext(TodoContext);

  return(
    <h2 style={ estilos }>Has Completado <strong>{completedTodos}</strong> de <strong>{totalTodos}</strong> To-dos</h2>
  )
}

export  { TodoCounter };