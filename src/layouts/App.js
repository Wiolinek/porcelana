import React from 'react';

import Header from "./Header";
import Section from "./Section";
import Navigation from "./Navigation";
import Footer from "./Footer";

import '../styles/App.css';



const App = () => {

  return (
    <>
    <div className="app">
      <nav>
        <Navigation />
      </nav>
      <header>
        <Header />
      </header>
      <section>
        <Section />
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
    </>
  );
}

export default App;
