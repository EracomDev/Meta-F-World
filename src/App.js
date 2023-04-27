import logo from './logo.svg';
import './App.css';
import HomePage from './Pages/HomePage/HomePage';
import AOS from 'aos';
import React, { useEffect } from 'react';
function App() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 200,
      easing: 'ease-in-sine'
    });
  }, []);
  return (
    <HomePage />
  );
}

export default App;
