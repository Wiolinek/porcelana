import React, { useEffect, useRef, useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll'

import '../styles/sass/navigation.sass';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const Navigation = () => {

    const asideWrapper = useRef(null);
    const logoAnimation = useRef(null);
    const navigationBarAnimation = useRef(null);
    const showMenuIcon = useRef(null);
    const [navMenuState, setNavMenuState] = useState(false);

    let Menu = () => {
        return (
            <>
                <li><Link to="about"onClick={closeMenuHandler} smooth={true}>About Us</Link></li>
                <li><Link to="products" onClick={closeMenuHandler} smooth={true}>Products</Link></li>
                <li><Link to="recommendations" onClick={closeMenuHandler} smooth={true}>Recommendations</Link></li>
                <li><Link to="career" onClick={closeMenuHandler} smooth={true}>Career</Link></li>
                <li><Link to="contact" onClick={closeMenuHandler} smooth={true}>Contact</Link></li>
                <li><Link to="shop" onClick={closeMenuHandler} target="_blank">E-Shop</Link></li>
            </>
        )
    }

    const scrollToBottom = () => {
        scroll.scrollToBottom();
    };

    const showMenuHandler = () => {
        setNavMenuState(true)
    }

    const closeMenuHandler = () => {
        setNavMenuState(false)
    }

    useEffect(() => {

        gsap.from(showMenuIcon.current.children, {rotation: 60, x: 100,
            scrollTrigger: {
              trigger:showMenuIcon.current,
              start:'90% 10%',
            //   end:'50% 90%',
              scrub: true,
              // pin: true,
              // pinSpacing: false,
              //events: onEnter onLeave onEnterBack onLeaveBack
              toggleActions:'play restart reverse pause',
              //options: play plause resume reset restart complete reverse none
            //   markers:true,
            }
          })

        const tl = gsap.timeline()

        tl
            .from(logoAnimation.current, {scale: 0, delay: 2.3})
            .from(navigationBarAnimation.current.children, {scale: 0,
                stagger: {
                    from: 'start',
                    axis: 'x',
                    amount: 1
                }})
            .from(asideWrapper.current.children, {rotation: 60, x: 100, stagger: .3})
    }, [])


    return (
    <nav id="navigation">
            <div className="logo menu-logo" ref={logoAnimation}>
                <p className="logo-name">ICM Inc.</p>
            </div>
        { navMenuState ?
            <nav className="nav-menu">
                <div className="menu-logo-container">
                    <div className="logo menu-logo" ref={logoAnimation}>
                        <p className="logo-name">ICM Inc.</p>
                    </div>
                </div>
                <div className="navigation-menu-container">
                    <ul className="navigation-menu">
                        <li><i className="fas fa-times" onClick={closeMenuHandler}></i></li>
                        <li><Link to="navigation" onClick={closeMenuHandler} smooth={true}>Home</Link></li>
                        <Menu/>
                    </ul>
                </div>
            </nav> : null }
        <nav>
            <ul className="navigation-bar" ref={navigationBarAnimation}>
                <Menu/>
            </ul>
        </nav>
        <aside>
            <div onClick={showMenuHandler} ref={showMenuIcon}><i className="fas fa-bars"></i></div>
            <ul ref={asideWrapper}>
                <li><a href="https://www.facebook.com" rel="noreferrer" target="_blank"><i className="fab fa-facebook"></i></a></li>
                <li><a href="https://www.instagram.com" rel="noreferrer" target="_blank"><i className="fab fa-instagram"></i></a></li>
                <li><a href="https://twitter.com" rel="noreferrer" target="_blank"><i className="fab fa-twitter-square"></i></a></li>
                <li><a href="https://www.messenger.com" rel="noreferrer" target="_blank"><i className="fab fa-facebook-messenger"></i></a></li>
                <li onClick={scrollToBottom}><i className="fas fa-envelope"></i></li>
            </ul>
        </aside>
    </nav>
    )
}   


export default Navigation;