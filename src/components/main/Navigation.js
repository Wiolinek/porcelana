import React, { useEffect, useRef, useState } from 'react';

import MenuModal from './MenuModal';

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
            <button ref={navigationIconAnimation} className="show-menu"><i className="fas fa-bars" navMenuState={navMenuState} onClick={showMenuHandler}></i></button>
            <MenuModal navMenuState={navMenuState} closeMenuHandler={closeMenuHandler}/>
        </>
    )
}   


export default Navigation;