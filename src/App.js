import React from 'react';
import Header from "./Components/Header/header";
import Home from './Components/Header/Home/home';
import { Route, Routes } from 'react-router-dom';

// const Home = () => <h2>Home Page</h2>;
// const About = () => <h2>About Page</h2>;
// const Contact = () => <h2>Contact Page</h2>;

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/Home' Component={<Home />} />


      </Routes>


    </div>
  );
}

export default App;
