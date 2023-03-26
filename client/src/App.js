import "./App.css";
import axios from "axios";
import HomepageNavbar from "./components/Homepage/navbar";
import Login from "./components/Authauticate/login";
import Register from "./components/Authauticate/Register";
import { BrowserRouter, Route } from "react-router-dom";
import AllTodos from "./components/todos/viewall";
import Navbar from "./components/todos/navbar";
import AddTod from "./components/todos/addtodo";
import { useEffect, useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get("/api/todos").then((res) => {
      setTodos(res.data);
    });
  }, []); 
console.log(todos);
  return (
    <div className="">
      <BrowserRouter>
        <Navbar />
        {/* {todos.map((todo) => (
          <Route exact path="/home" key={todo.id}>
            <AllTodos
              title={todo.title}
              priority={todo.priority}
              description={todo.description}
              status={todo.status}
            />
          </Route>
        ))} */}
        <Route exact path="/home">
          <AllTodos/>
        </Route>
        <Route exact path="/nav">
          <HomepageNavbar />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/add">
          <AddTod/>
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
