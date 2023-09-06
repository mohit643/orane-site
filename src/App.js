import './App.css';
import { Routes,Route } from 'react-router';
import Home from './Components/Home/Home';
import About from  './Components/About/About';
import Navbar from './Components/Navbar/Navbar';
import ContactUs from './Components/Contact us/ContactUs';

function App() {
  return (
    <div className="App">
     <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact us' element={<ContactUs/>}/>
      </Routes>
      
      
    </div>
  );
}

export default App;
