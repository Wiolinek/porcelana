import React from 'react';

import Navigation from "./Navigation";
import Section from "./Section";
import About from "./About";
import Products from "./Products";
import Recommendations from "./Recommendations";
import Career from "./Career";
import Footer from "./Footer";
// import Shop from "./Shop";

import '../styles/App.css';


const App = () => {

    return (
      <>
        <div className="app">
          <header>
            <nav>
              <Navigation />
            </nav>
            <div>
              <Section />
            </div>
          </header>
          <main>
            <article>
              <About />
            </article>
            <article>
              <Products />
            </article>
            <article>
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
          <section>
            {/* <Shop /> */}
          </section>
        </div>
      </>
    );
}

export default App;
