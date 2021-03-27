import React from 'react';

import {Element} from 'react-scroll'

import Navigation from "../components/main/Navigation";
import Home from "../components/main/Home";
import About from "../components/main/About";
import Products from "../components/main/Products";
import Recommendations from "../components/main/Recommendations";
import Career from "../components/main/Career";
import Footer from "../components/main/Footer";

import '../styles/sass/main/main.sass';


const Main = () => {



    return (
      <>
        <div className="main">
          <Element name="home">
            <header className="header" id="home">
              <nav>
                <Navigation />
              </nav>
              <section className="home">
                <Home />
              </section>
            </header>
          </Element>
          <main>
            <Element name="about">
              <article className="about" id="about" name="about">
                <About />
              </article>
            </Element>
            <Element name="products">
              <article className="offer" id="products" name="products">
                <Products />
              </article>
            </Element>
            <Element name="recommendations">
              <article className="recommendations" id="recommendations" name="recommendations">
                <Recommendations />
              </article>
            </Element>
            <Element name="career">
              <article id="career" name="career">
                <Career />
              </article>
            </Element>
          </main>
            <Element name="contact">
              <footer id="contact" name="contact">
                <Footer />
              </footer>
            </Element>
        </div>
      </>
    );
}

export default Main;
