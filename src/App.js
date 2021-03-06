import React from 'react';
import Navbar from './components/navbar';
import HomeDescription from './components/home-description';
import Testimonials from './components/testimonials';
import ContactFooter from './components/contact-footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar/>
      </header>

      <img src="images/givingtalk.jpg" className="background" alt="Andrew Gunderman" />
      <HomeDescription/>
      <Testimonials/>
      <ContactFooter/>
    </div>
  );
}

export default App;