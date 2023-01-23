import React from "react";

function TodoSearch() {

  const onSearchValueChanged = (event) => {
    console.log(event.target.value);
  }

  return(
    <input type="text" placeholder="Ingresa un nuevo to-do" onChange={onSearchValueChanged}/>
  )
}

export { TodoSearch };