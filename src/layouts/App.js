import React from 'react';

import Header from "./Header";
import Section from "./Section";
import Navigation from "./Navigation";
import Footer from "./Footer";
import '../styles/App.css';



const App = () => {

  return (
    <div className="app">
       <Navigation />
      <Header />
      <Section />
      <Footer />
    </div>
  );
}

export default App;
