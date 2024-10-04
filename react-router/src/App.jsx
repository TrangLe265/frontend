import './App.css'
import {Link,Outlet} from 'react-router-dom';

function App() {

  return (
    <>
      <div class="header"><h2>Welcome to React Router</h2></div>
      
      <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/contact"}>Contact</Link>
      </nav>
      <Outlet />
      
    </>
  );  
}

export default App; 
