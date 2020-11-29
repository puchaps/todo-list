import React from 'react';

import '../../css/Main.css'

const FormComponent = ({inputValue, allTodoList, selectValue, setInputValue, setAllTodoList, setSelectValue}) => {
  const handleInputValue = (e) => {
    const value = e.target.value;

    setInputValue(value);
  };

  const handleAddItemInTodoList = (e) => {
    e.preventDefault();

    if(inputValue !== '') {
      setAllTodoList([
      ...allTodoList, {text: inputValue, completed: false, id: Date.now()}
    ])};
    
    setInputValue('');  
  };

  const handleSelectValue = (e) => {
    const value = e.target.value;
    setSelectValue(value);
  }

  return (
    <form>
      <input type="text" className="todo-input" value = {inputValue} onChange = {handleInputValue}/>
      <button className="todo-button" type="submit" onClick = {handleAddItemInTodoList}>
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo" value = {selectValue} onChange = {handleSelectValue}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
   </form>
  )
  
}

export default FormComponent;