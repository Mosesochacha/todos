import "./App.css";
import HomepageNavbar from "./components/Homepage/navbar";
import Login from "./components/Authauticate/login";
import Register from "./components/Authauticate/Register";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Route exact path="/nav">
          <HomepageNavbar />
        </Route>

        <Route exact path="/login">
          <Login />
        </Route>

        <Route exact path="/register">
          <Register />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
