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
                <li><Link to="about" smooth={true}>About Us</Link></li>
                <li><Link to="products" smooth={true}>Products</Link></li>
                <li><Link to="recommendations" smooth={true}>Recommendations</Link></li>
                <li><Link to="career" smooth={true}>Career</Link></li>
                <li><Link to="contact" smooth={true}>Contact</Link></li>
                <li><Link to="shop" target="_blank">E-Shop</Link></li>
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
    <nav>
        <div className="logo menu-logo" ref={logoAnimation}>
            <p className="logo-name">ICM Inc.</p>
        </div>
            { navMenuState ?
            <nav className="nav-menu">
                <div>
                    <div className="logo menu-logo" ref={logoAnimation}>
                        <p className="logo-name">ICM Inc.</p>
                    </div>
                </div>
                <ul className="navigation-menu">
                    <li><i className="fas fa-times" onClick={closeMenuHandler}></i></li>
                    <li><Link to="home" smooth={true}>Home</Link></li>
                    <Menu/>
                </ul>
            </nav> : null }
        <nav>
            <ul className="navigation-bar" ref={navigationBarAnimation}>
                <Menu/>
            </ul>
        </nav>
        <aside>
            <div onClick={showMenuHandler} ref={showMenuIcon}><i className="fas fa-bars"></i></div>
            <ul ref={asideWrapper}>
                <li><i className="fab fa-facebook"></i></li>
                <li><i className="fab fa-instagram"></i></li>
                <li><i className="fab fa-twitter-square"></i></li>
                <li><i className="fab fa-facebook-messenger"></i></li>
                <li onClick={scrollToBottom}><i className="fas fa-envelope"></i></li>
            </ul>
        </aside>
    </nav>
    )
}   


export default Navigation;