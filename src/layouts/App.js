import React from 'react';

import Navigation from "./Navigation";
import Section from "./Section";
import About from "./Articles";
import Footer from "./Footer";
import Shop from "./Shop";

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
              {/* <Section /> */}
            </article>
            <article>
              {/* <Section /> */}
            </article>
          </main>
          <footer>
            <Footer />
          </footer>
          {/* cała sekcja sklepu do zmiany miejsca */}
          <section>
            <Shop />
          </section>
        </div>
      </>
    );
}

export default App;
