import React, { useEffect, useRef, useState } from 'react';

import MenuModal from './MenuModal';
import { NavLink } from "react-router-dom";

import '../../styles/sass/main/navigation.sass';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const Navigation = () => {

    const [navMenuState, setNavMenuState] = useState(false);
    const navigationIconAnimation = useRef(null);

    const showMenuHandler = () => {
        setNavMenuState(true)
    }

    const closeMenuHandler = () => {
        setNavMenuState(false)
    }

    useEffect(() => {

        const tl = gsap.timeline()

        tl
            .to(navigationIconAnimation.current, {y: "0", autoAlpha: 1, duration: 2,
                stagger: {
                    from: "start",
                    axis: "x",
                    each: .32,
                    ease: "none",
                }})
    }, [])


    return (
        <>
            
            <div ref={navigationIconAnimation} className="show-menu">
                <NavLink to="/shop/all" target="_blank"><i className="fas fa-shopping-cart"></i></NavLink>
                <i className="fas fa-bars" navMenuState={navMenuState} onClick={showMenuHandler}></i>
            </div>
            <MenuModal navMenuState={navMenuState} closeMenuHandler={closeMenuHandler}/>
        </>
    )
}   


export default Navigation;