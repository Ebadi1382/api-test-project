import React from "react";

const TodoList=({todos})=> {
    return(
        <div>
            <ul className="list-group">
                {todos.map((todo)=> (
                     <li className="list-group-item d-flex justify-content-between align-items-center">
                        {todo.title}
                     </li>
                ))}
            </ul>
        </div>
    )
}
export default TodoList