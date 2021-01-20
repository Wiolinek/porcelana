import React, { useEffect, useRef } from 'react';

import '../styles/sass/products.sass';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const Products = () => {

    const productsWrapper = useRef(null);

    useEffect(() => {
  
        gsap.fromTo(productsWrapper.current.children, {y: '+=100', autoAlpha: 0}, {y: 0, autoAlpha: 1, stagger: .5, duration: 2,
          scrollTrigger: {
            trigger: productsWrapper.current,
            start:'top 85%',
            end:'bottom bottom',
            scrub: 0,
            //events: onEnter onLeave onEnterBack onLeaveBack
            toggleActions:'play restart complete reverse',
            //options: play plause resume reset restart complete reverse none
            // markers:true,
          }
        })
    }, [])

    return (
            <div className="offer" id="products" ref={productsWrapper}>
                <h1>Products</h1>
                <div className="products">
                    <div className="dish mugs"><p>Mugs</p><div className="more-btn"><a href="#">More</a></div></div>
                    <div className="dish cups"><p>Cups</p><div className="more-btn"><a href="#">More</a></div></div>
                    <div className="dish pots"><p>Coffee Pots</p><div className="more-btn"><a href="#">More</a></div></div>
                    <div className="dish plates"><p>Plates</p><div className="more-btn"><a href="#">More</a></div></div>
                    <div className="dish bowls"><p>Bowls</p><div className="more-btn"><a href="#">More</a></div></div>
                    <div className="dish vases"><p>Vases</p><div className="more-btn"><a href="#">More</a></div></div>
                </div>
            </div>
    )
}

export default Products;