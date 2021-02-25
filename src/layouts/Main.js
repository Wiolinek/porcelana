import React from 'react';
import Navigation from "./Navigation";
import Home from "./Home";
import About from "./About";
import Products from "./Products";
import Recommendations from "./Recommendations";
import Career from "./Career";
import Footer from "./Footer";

import '../styles/sass/main.sass';


const Main = () => {

    return (
      <>
        <div className="main">
          <header className="header" id="main">
            <nav>
              <Navigation />
            </nav>
            <section className="home">
              <Home />
            </section>
          </header>
          <main>
            <article className="about" id="about">
              <About />
            </article>
            <article className="offer" id="products">
              <Products />
            </article>
            <article className="recommendations" id="recommendations">
              <Recommendations />
            </article>
            <article id="career">
              <Career />
            </article>
          </main>
          <footer id="footer">
            <Footer />
          </footer>
        </div>
      </>
    );
}

export default Main;
