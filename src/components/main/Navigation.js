import React, { useEffect, useRef } from 'react';
import { Link } from 'react-scroll'
import { NavLink } from "react-router-dom";

import '../../styles/sass/main/navigation.sass';

import {animateScroll as scroll } from 'react-scroll';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const Navigation = () => {

    const logoAnimation = useRef(null);
    const navigationBarAnimation = useRef(null);
    
    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    useEffect(() => {

        const tl = gsap.timeline()

        tl
            .from(logoAnimation.current, {scale: 0, delay: 1.3})
            .from(navigationBarAnimation.current.children, {y: "-100", autoAlpha: 0,
                stagger: {
                    from: "start",
                    axis: "x",
                    each: .32,
                    ease: "none",
                }})
    }, [])


    return (
        <nav>
            <ul className="navigation-bar" ref={navigationBarAnimation}>
                <li><Link to="about" smooth={true}>About Us</Link></li>
                <li><Link to="products" smooth={true}>Products</Link></li>
                <li><Link to="recommendations" smooth={true}>Recommendations</Link></li>
                <li><Link to="career" smooth={true}>Career</Link></li>
                <li><Link to="contact" smooth={true}>Contact</Link></li>
                <li><NavLink to="/shop/all" target="_blank">E-Shop</NavLink></li>
            </ul>
            <div className="logo" ref={logoAnimation} >
                <Link onClick={scrollToTop} className="logo-border">
                    <div smooth={true}>
                        <p className="logo-name">ICM Inc.</p> 
                    </div>
                </Link>
            </div>
        </nav>
    )
}   


export default Navigation;