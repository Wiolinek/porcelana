import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-scroll'

import MenuModal from './MenuModal';

import '../../styles/sass/main/home.sass';
// import styled from 'styled-components';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {

    const asideWrapper = useRef(null);
    const showMenuIcon = useRef(null);
    const homeWrapper = useRef(null);
    const arrowBtn = useRef(null);
    const [navMenuState, setNavMenuState] = useState(false);

    const showMenuHandler = () => {
        setNavMenuState(true)
    }

    const closeMenuHandler = () => {
        setNavMenuState(false)
    }

    useEffect(() => {

        const tl = gsap.timeline()

        tl
            .fromTo(homeWrapper.current.children, {autoAlpha: 0}, {autoAlpha: 1, duration: 3, delay: .6})
            .from(asideWrapper.current.children, {rotation: 60, x: 100, stagger: .3, delay: 2})
            .from(arrowBtn.current, {autoAlpha: 0, y: '+100', duration: 2, delay: .7})
            .fromTo(arrowBtn.current, {y: '0'}, {y: '+20', ease: 'power1.inOut', repeat: Infinity, yoyo: true})

            .from(showMenuIcon.current.children, {rotation: 60, x: 100,
                scrollTrigger: {
                  trigger:showMenuIcon.current,
                  start:'90% 10%',
                //   end:'50% 90%',
                  scrub: true,
                  // pin: true,
                  // pinSpacing: false,
                  //events: onEnter onLeave onEnterBack onLeaveBack
                  toggleActions:'play complete reverse complete',
                  //options: play plause resume reset restart complete reverse none
                //   markers:true,
                }
              })    
    }, [])


    return (
        <>
            <MenuModal navMenuState={navMenuState} closeMenuHandler={closeMenuHandler}/>
            <div className="main-page">
                <div ref={homeWrapper}>
                    <p>Our design <br/>Your <span>style</span></p>
                </div>
                <Link to="about" smooth={true}><i className="fas fa-angle-double-down" ref={arrowBtn}></i></Link>
            </div>
            <aside>
                <button className="show-menu" navMenuState={navMenuState} onClick={showMenuHandler} ref={showMenuIcon}><i className="fas fa-bars"></i></button>
                <ul ref={asideWrapper}>
                    <li><a href="https://www.facebook.com" rel="noreferrer" target="_blank"><i className="fab fa-facebook"></i></a></li>
                    <li><a href="https://www.instagram.com" rel="noreferrer" target="_blank"><i className="fab fa-instagram"></i></a></li>
                    <li><a href="https://twitter.com" rel="noreferrer" target="_blank"><i className="fab fa-twitter-square"></i></a></li>
                    <li><a href="https://www.messenger.com" rel="noreferrer" target="_blank"><i className="fab fa-facebook-messenger"></i></a></li>
                    <li><Link to="contact" smooth={true}><i className="fas fa-envelope"></i></Link></li>
                </ul>
            </aside>
        </>
    )
}   

export default Home;