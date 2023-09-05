import './App.css';
import { Routes,Route } from 'react-router';
import Home from './Components/Home/Home';
import About from  './Components/About/About';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
     
      <Routes>
        <Route path='/' element={<Navbar/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </div>
  );
}

export default App;
