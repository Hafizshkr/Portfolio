import React from 'react';
import { Routes, Route,  } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar.jsx';
import Home from './Pages/Home/Home.jsx';
import Projects from './Pages/Projects/Projects.jsx';
import Blogs from './Pages/Blogs/Blogs.jsx';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="Projects" element={<Projects/>} />
        <Route path="Blog" element={<Blogs/>} />

      </Routes>
    </>
  );
}

export default App;
