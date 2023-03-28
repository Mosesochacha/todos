import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import SignUp from "./SignUp";
import axios from "axios";
import Login from "./Login";
import NavBar from "./NavBar";
import Home from "./Home";
import AddTod from "./addtodo";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("https://todosp.onrender.com/user/login/check").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get("https://todosp.onrender.com/todos").then((res) => {
      setTodos(res.data);
    });
  }, []);

  console.log(todos);

  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <main>
        {user ? (
          <Switch>
            <Route exact path="/">
              {todos.length > 0 &&
                todos.map((todo) => {
                  console.log(todo);
                  return (
                    <div key={todo.id}>
                      <Home
                        key={todo.id}
                        title={todo.title}
                        priority={todo.priority}
                        description={todo.description}
                        status={todo.status}
                        user={user}
                      />
                    </div>
                  );
                })}

            </Route>
          </Switch>
        ) : (
          <Switch>
            <Route path="/signup">
              <SignUp setUser={setUser} />
            </Route>
            <Route path="/login">
              <Login setUser={setUser} />
            </Route>
            <Route path="/add">
                <AddTod />
              </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        )}
      </main>
    </>
  );
}
export default App;
