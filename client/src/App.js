
import './App.css';
import HomepageNavbar from './components/Homepage/navbar';
import Login from './components/Authauticate/login';
import Register from './components/Authauticate/Register';

function App() {
  return (
    <div className="App">
      <HomepageNavbar/>
      <Login/>
      
      <Register/>
    </div>
  );
}

export default App;
