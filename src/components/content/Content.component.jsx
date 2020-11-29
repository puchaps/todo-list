import React, { useEffect, useState } from 'react';

import '../../css/Main.css';

import FormComponent from '../form/Form.components';
import TodoListComponent from '../todo-list/TodoList.component';

const ContentComponent = () => {
  const[inputValue, setInputValue] = useState('');
  const[allTodoList, setAllTodoList] = useState([]);
  const[selectValue, setSelectValue] = useState('all')
  const[filterTodoItem, setFilterTodoItem] = useState([]);

  const handleShowTodoList = () => {
    switch(selectValue) {
      case 'completed':
        setFilterTodoItem(allTodoList.filter(item => item.completed === true));
        break;
      case 'uncompleted':
        setFilterTodoItem(allTodoList.filter(item => item.completed === false));
        break;
      default:
        setFilterTodoItem(allTodoList);
        break;
    }
  }

  const saveDataLocalInStore = () => {
    if(localStorage.getItem("todoList") === null) {
      localStorage.setItem("todoList", JSON.stringify([]));
    } else {
      const dataLocalStorage = localStorage.getItem("todoList", JSON.stringify(allTodoList));

      setAllTodoList(JSON.parse(dataLocalStorage));
    }

    return;
  }

  const saveChangesInLocalStore = () => {
    localStorage.setItem("todoList", JSON.stringify(allTodoList));
  }

  useEffect(() => {
    saveDataLocalInStore();
  }, []);

  useEffect(() => {
    handleShowTodoList();
    saveChangesInLocalStore();
  }, [allTodoList, selectValue]);

  return(
    <div className = 'main-content'>
      <h1 className = 'main-title'>Enter your first item</h1>
      <FormComponent
        inputValue = {inputValue}
        allTodoList = {allTodoList}
        selectValue = {selectValue}
        setInputValue = {setInputValue}
        setAllTodoList = {setAllTodoList}
        setSelectValue = {setSelectValue}
      />
      <TodoListComponent 
        allTodoList = {allTodoList}
        filterTodoItem = {filterTodoItem}
        setAllTodoList = {setAllTodoList}
      />
    </div>
  )
};

export default ContentComponent;