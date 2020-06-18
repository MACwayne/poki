import React from 'react';
import ToDo from './ToDo.js'

function ToDoList(props) {
  return (
    <div>
        My To Do List:
        <ul>
         { props.todos.map(toDoItem => <li><ToDo todo={toDoItem}/></li>) }
        </ul>
    </div>
  );
}

export default ToDoList;
