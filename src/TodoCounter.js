import React from "react";

const estilos = {
  color: "#fff",
  fontWeight: "300",
}

function TodoCounter() {
  return(
    <h2 style={ estilos }>Has Completado <strong>2</strong> de <strong>4</strong> Todos</h2>
  )
}

export  { TodoCounter };