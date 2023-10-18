import './App.css'; 
import React from 'react'
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import About from './About ';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Service from './Service';
import Contact from './Contact';
import Menu from './Menu';
import CompA from './UseContext/CompA';

function App() {
  return (
    <div className="App">

      <CompA />
      
      <Router>
      
      <Header /> 
          <Routes>
            <Route exact path='/' element={< Home />}></Route>
            <Route exact path='/about' element={< About />}></Route>
            <Route exact path='/contact' element={< Contact />}></Route>
            <Route exact path='/service' element={< Service />}></Route>
            <Route exact path='/menu' element={< Menu />}></Route>
          </Routes>
       <Footer />
      </Router>
      
    </div>
  );
}

export default App;
