import React, { useEffect, useRef } from 'react';
import { Link } from 'react-scroll'

import '../styles/sass/navigation.sass';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const Navigation = () => {

    const logoAnimation = useRef(null);
    const navigationBarAnimation = useRef(null);

    useEffect(() => {

        const tl = gsap.timeline()

        tl
            .from(logoAnimation.current, {scale: 0, delay: 2.3})
            .from(navigationBarAnimation.current.children, {scale: 0,
                stagger: {
                    from: 'start',
                    axis: 'x',
                    amount: 1
                }})
    }, [])


    return (
    <nav id="navigation">
            <div className="logo menu-logo" ref={logoAnimation}>
                <p className="logo-name">ICM Inc.</p>
            </div>
        <nav>
            <ul className="navigation-bar" ref={navigationBarAnimation}>
                <li><Link to="about" smooth={true}>About Us</Link></li>
                <li><Link to="products" smooth={true}>Products</Link></li>
                <li><Link to="recommendations" smooth={true}>Recommendations</Link></li>
                <li><Link to="career" smooth={true}>Career</Link></li>
                <li><Link to="contact" smooth={true}>Contact</Link></li>
                <li><Link to="shop" target="_blank">E-Shop</Link></li>
            </ul>
        </nav>
    </nav>
    )
}   


export default Navigation;