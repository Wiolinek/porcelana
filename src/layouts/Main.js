import React, { useEffect } from 'react';

// import { useParams } from "react-router-dom";

import Navigation from "../components/main/Navigation";
import Home from "../components/main/Home";
import About from "../components/main/About";
import Products from "../components/main/Products";
import Recommendations from "../components/main/Recommendations";
import Career from "../components/main/Career";
import Footer from "../components/main/Footer";

import '../styles/sass/main/main.sass';

import {animateScroll as scroll } from 'react-scroll';


const Main = () => {

  // const { sectionLink } = useParams();

  useEffect(() => {
      scroll.scrollToTop();
  });

    return (
      <>
        <div className="main">
          <header className="header" id="home">
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
          <footer id="contact">
            <Footer />
          </footer>
        </div>
      </>
    );
}

export default Main;
