import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Navigation from "./Navigation";
import Home from "./Home";
import About from "./About";
import Products from "./Products";
import Recommendations from "./Recommendations";
import Career from "./Career";
import Footer from "./Footer";
import Shop from "./Shop";

import '../styles/sass/app.sass';


const App = () => {

    return (
      <>
        <div className="app">
          <header className="header">
            <nav>
              <Navigation />
            </nav>
            <section className="home">
              <Home />
            </section>
          </header>
          <main>
            <article>
              <About />
            </article>
            <article className="offer">
              <Products />
            </article>
            <article className="recommendations">
              <Recommendations />
            </article>
            <article>
              <Career />
            </article>
          </main>
          <footer>
            <Footer />
          </footer>
          {/* cała sekcja sklepu do zmiany miejsca */}
          <Router>
            <Shop />
          </Router>
        </div>
      </>
    );
}

export default App;
