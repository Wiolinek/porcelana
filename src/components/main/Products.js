import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from "react-router-dom";

import '../../styles/sass/main/products.sass';

import axios from "axios";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const Products = () => {
  
  const [productsOptions, setProductsOptions] = useState([]);
  const productsOptionsWrapper = useRef(null);

  useEffect(() => {

      axios.get(`http://localhost:3030/categories`)
          .then(response => {
          const categories = response.data;
          setProductsOptions(categories);
          })
  }, []);


  const productsOptionsToDisplay = productsOptions.map(product => product.name !== "All" && (
    <div>
        <div className={ `product-photo ${product.link}` }><p>{product.name}</p></div>
            <div className="product-info"><p>{product.category_description}</p>
          <div className="more-btn"><NavLink to={ `/shop/${product.link}` } target="_blank">More</NavLink></div></div>
    </div>
  ));


  useEffect(() => {

    gsap.fromTo(productsOptionsWrapper.current.children, {y: '+=150', scale: 1.5, autoAlpha: 0}, {y: 0, autoAlpha: 1, scale: 1, stagger: .5,
      scrollTrigger: {
        trigger: productsOptionsWrapper.current,
        start:'top 100%',
        end:'bottom bottom',
        scrub: 1,
          // pin: true,
          //events: onEnter onLeave onEnterBack onLeaveBack
        toggleActions:'play restart complete reverse',
          //options: play plause resume reset restart complete reverse none
          // markers:true,
      }
    })
  }, [productsOptions]);


    return (
            <>
                <h1>Products</h1>
                <div className="products" ref={productsOptionsWrapper}>
                  {productsOptionsToDisplay}
                </div>
            </>
    )
}

export default Products;