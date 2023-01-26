import React from "react";

function TodoSearch({ searchValue, setSearchValue }) {

  const onSearchValueChanged = (event) => {   
    console.log(event.target.value) 
    setSearchValue(event.target.value)
  }

  return(
    <input type="text" placeholder="Buscar to-do" value={searchValue} onChange={onSearchValueChanged}/>
  )
}

export { TodoSearch };