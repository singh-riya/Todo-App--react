import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import Header from "./components/Header";
import Footer from "./components/Footer";
function App() {
  //states
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  //Run only once when the app start
  useEffect(() => {
    getLocalTodos();
  }, []);

  //Use Effect
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  //functions
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };
  //save to local
  const saveLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  };
  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  };

  return (
    <div className='App'>
      <Header />
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <TodoList
        filteredTodos={filteredTodos}
        setTodos={setTodos}
        todos={todos}
      />
      <Footer />
    </div>
  );
}

export default App;
