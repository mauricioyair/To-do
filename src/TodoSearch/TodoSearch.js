import React, { useContext } from "react";
import { TodoContext } from "../TodoContext";


function TodoSearch() {

  const { searchValue, setSearchValue } = useContext(TodoContext);

  const onSearchValueChanged = (event) => {   
    console.log(event.target.value) 
    setSearchValue(event.target.value)
  }

  return(
    <input type="text" placeholder="Buscar to-do" value={searchValue} onChange={onSearchValueChanged}/>
  )
}

export { TodoSearch };