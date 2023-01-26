import React from "react";

const estilos = {
  color: "#fff",
  fontWeight: "300",
}

function TodoCounter({ total, completed }) {
  return(
    <h2 style={ estilos }>Has Completado <strong>{completed}</strong> de <strong>{total}</strong> To-dos</h2>
  )
}

export  { TodoCounter };