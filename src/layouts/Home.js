import React, { useEffect, useRef } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll'

import '../styles/sass/home.sass';
// import styled from 'styled-components';

import { gsap } from "gsap";

const Home = () => {

    const scrollToBottom = () => {
        scroll.scrollToBottom();
    };

    const homeWrapper = useRef(null);
    const arrowBtn = useRef(null);

    useEffect(() => {

        const tl = gsap.timeline()

        tl
            .fromTo(homeWrapper.current.children, {autoAlpha: 0}, {autoAlpha: 1, stagger: .9, duration: 1.6, delay: .6})
            .from(arrowBtn.current, {autoAlpha: 0, y: '+100', duration: 2, delay: .8})
            .fromTo(arrowBtn.current, {y: '0'}, {y: '+20', ease: 'power1.inOut', repeat: Infinity, yoyo: true})
    }, [])


    return (
    <section className='home'>
        <div ref={homeWrapper}>
            <p>Our design</p>
            <p>Your <span>style</span></p>
        </div>
        <Link to="about" smooth={true}><i className="fas fa-angle-double-down" onClick={scrollToBottom} ref={arrowBtn}></i></Link>
    </section>
    )
}   

export default Home;