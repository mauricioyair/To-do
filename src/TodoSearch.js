import React from "react";

function TodoSearch({ searchValue, setStateValue }) {

  const onSearchValueChanged = (event) => {   
    console.log(event.target.value) 
    setStateValue(event.target.value)
  }

  return(
    <input type="text" placeholder="Buscar to-do" value={searchValue} onChange={onSearchValueChanged}/>
  )
}

export { TodoSearch };