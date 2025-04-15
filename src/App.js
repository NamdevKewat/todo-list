import React from 'react';
import './App.css';
import List from './components/list.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div className="App">
      <Header/>
      <br></br>
      <List/>
      <Footer/>
    </div>
  );
}

export default App;
