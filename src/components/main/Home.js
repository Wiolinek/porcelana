import React, { useEffect, useRef } from 'react';
import { Link } from 'react-scroll';

import '../../styles/sass/main/home.sass';

import { scroller } from 'react-scroll'

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const Home = () => {

    const logoAnimation = useRef(null);
    const asideWrapper = useRef(null);
    const homeWrapper = useRef(null);
    const arrowBtn = useRef(null);

    useEffect(() => {

        const tl = gsap.timeline();

        tl
            .from(logoAnimation.current, {scale: 0,  delay: .3})
            .to(homeWrapper.current, {opacity: 1, duration: 3, delay: .7})
            .to(homeWrapper.current.firstChild, {x: '0', duration: 2.3, delay: -3})
            .to(homeWrapper.current.lastChild, {x: '0', duration: 2.3, delay: -3})
            .from(asideWrapper.current.children, {rotation: 60, x: '100', stagger: .3})
            .from(arrowBtn.current, {autoAlpha: 0, y: '+100', duration: 2})
            .fromTo(arrowBtn.current, {y: '0'}, {y: '+20', ease: 'power1.inOut', repeat: Infinity, yoyo: true})
      
    }, []);

    const scrollToSection = (link) => scroller.scrollTo(link, {
        delay: 1000,
        smooth: 'linear',
        hashSpy: 'true',
      });


    return (
        <>
            <section>
                <div className="logo" ref={logoAnimation} >
                    <Link className="logo-border" smooth to="/#home" onClick={() => scrollToSection("home")}>
                        <div>
                            <p className="logo-name">ICM Inc.</p> 
                        </div>
                    </Link>
                </div>
                <div className="main-page">
                    <div ref={homeWrapper} className="tagline">
                        <p>Our design</p>
                        <p>Your <span>style</span></p>
                    </div>
                    <Link to="about" smooth><i className="fas fa-angle-double-down" ref={arrowBtn}></i></Link>
                </div>
            </section>
            <aside className="side-bar">
                <ul ref={asideWrapper}>
                    <li>
                        <a href="https://www.facebook.com" rel="noreferrer" target="_blank">
                            <i className="fab fa-facebook"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.messenger.com" rel="noreferrer" target="_blank">
                            <i className="fab fa-facebook-messenger"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com" rel="noreferrer" target="_blank">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com" rel="noreferrer" target="_blank">
                            <i className="fab fa-twitter-square"></i>
                        </a>
                    </li>
                    <li>
                        <Link to="contact" smooth>
                            <i className="fas fa-envelope"></i>
                        </Link>
                    </li>
                </ul>
            </aside>
        </>
    )
}   

export default Home;