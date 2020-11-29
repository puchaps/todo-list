import React from 'react';

import TaskOfTodoListComponent from './task-todo-list/TaskOfTodoList.component';

const TodoListComponent = ({allTodoList, filterTodoItem, setAllTodoList}) => {

  const handleDeletedTaskOfTodoList = (taskDeleted) => {
    const deleted = allTodoList.filter((item) => item.id !== taskDeleted );
    
    setAllTodoList(deleted);
  };

  const handlerChangeCompletedTask = (taskChange) => {
    const changeCompleted = allTodoList.map((item) => {
      if(item.id === taskChange) {
        return {
          ...item, completed: !item.completed
        }
      } else{
        return item;
      }
    });

    setAllTodoList(changeCompleted)
  };

  const showTodoListForMap =  filterTodoItem.map((item) => {
    return(
      <TaskOfTodoListComponent 
        key = {item.id}
        {...item}
        deletedTask = {handleDeletedTaskOfTodoList}
        changeCompletedTask = {handlerChangeCompletedTask}
      />
    )
  });

  return(
    <div className="todo-container">
      <ul className="todo-list">
        {showTodoListForMap}
      </ul>
    </div>
  )
};

export default TodoListComponent;