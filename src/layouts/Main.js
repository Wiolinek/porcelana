import React from 'react';

import {Element} from 'react-scroll'

import Navigation from "../components/main/Navigation";
import Home from "../components/main/Home";
import About from "../components/main/About";
import Products from "../components/main/Products";
import Recommendations from "../components/main/Recommendations";
import Career from "../components/main/Career";
import Contact from "../components/main/Contact";

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
              <section className="about" id="about" name="about">
                <About />
              </section>
            </Element>
            <Element name="products">
              <section className="offer" id="products" name="products">
                <Products />
              </section>
            </Element>
            <Element name="recommendations">
              <section className="recommendations" id="recommendations" name="recommendations">
                <Recommendations />
              </section>
            </Element>
            <Element name="career">
              <section id="career" name="career">
                <Career />
              </section>
            </Element>
          </main>
            <Element name="contact">
              <section className="contact" id="contact" name="contact">
                <Contact />
              </section>
            </Element>
        </div>
      </>
    );
}

export default Main;
