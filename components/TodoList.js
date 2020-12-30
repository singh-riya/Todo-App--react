import React from "react";
import Todo from "./Todo";
function TodoList({ todos, setTodos, filteredTodos }) {
  console.log(todos);
  return (
    <div>
      <div className='todo-container'>
        <ul className='todo-list'>
          {filteredTodos.map((todo) => (
            <Todo
              setTodos={setTodos}
              todos={todos}
              key={todo.id}
              text={todo.text}
              //id={todo.id}
              todo={todo}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
