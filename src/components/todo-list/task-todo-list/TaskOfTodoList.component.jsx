import React from 'react';

import '../../../css/Main.css';

const TaskOfTodoListComponent = ({text, id, completed, deletedTask, changeCompletedTask}) => {
  return(
    <div className = 'todo'>
      <li className = {`todo-item ${completed ? 'completed' : ''}`}>{text}</li>
      <button className={`complete-btn ${completed ? 'red' : ''}`} onClick = {() => changeCompletedTask(id)}>
        {!completed ? <i className="fas fa-check"></i> : <i className="fas fa-close">&times;</i>}
      </button>
      <button className="trash-btn" onClick = {() => deletedTask(id)}>
          <i className="fas fa-trash"></i>
      </button>
    </div>
  )
}

export default TaskOfTodoListComponent;