
import './App.css';
import { NavBar } from './componants/NavBar/NavBar';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";


const App = () => {
  
  return (
    <div className="App">
      <Router>
      <NavBar/>
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/menu' exact element={<Menu/>}/>
        <Route path='/about' exact element={<About/>}/>
        <Route path='/contact' exact element={<Contact/>}/>
      </Routes>
      
      </Router>
    </div>
  );
}

export default App;