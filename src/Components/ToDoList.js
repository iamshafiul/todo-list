import React from 'react';
import ToDo from './ToDo';

const ToDoList = ({toDos,setToDos,filteredToDos}) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {
                    filteredToDos.map(toDo =>(
                        <ToDo setToDos={setToDos} toDos={toDos} toDo={toDo} key={toDo.id} text={toDo.text} id={toDo.id}></ToDo>
                    ))
                }
            </ul>
        </div>
    );
};

export default ToDoList;