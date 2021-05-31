import React, { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";

import '../../styles/sass/main/products.sass';

import axios from "axios";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const Products = () => {
  
  const [productsOptions, setProductsOptions] = useState([]);

  useEffect(() => {

      axios.get(`http://localhost:3030/categories`)
          .then(response => {
          const categories = response.data;
          setProductsOptions(categories);
          })
  }, []);


  const productsOptionsToDisplay = productsOptions.map(product => product.name !== "All" && (
    <div key={product.id} className="product-cart">
      <div className={ `product-photo ${product.link}` }>
        <p>{product.name}</p>
      </div>
      <div className="product-info">
        <p>{product.category_description}</p>
        <div className="more-btn"><NavLink to={ `/shop/${product.link}` } target="_blank">More</NavLink></div>
      </div>
    </div>
  ));


  useEffect(() => {

    const products = gsap.utils.toArray('.product-info');
    const photos = gsap.utils.toArray('.product-photo');

    gsap.set(products, {x: '+80', autoAlpha: 0});
    gsap.set(photos, {y: '+80', x: '-80', autoAlpha: 0})

    ScrollTrigger.batch(photos, {
      start:'top 70%',
      end:'bottom bottom',
      scrub: 1,
      onEnter: batch => gsap.to(batch, {y: 0, x: 0, autoAlpha: 1, stagger: .5, duration: .5, ease: 'linear', delay: -.5}),
      onLeaveBack: batch => gsap.to(batch, {y: '+80', x: '-80',autoAlpha: 0, stagger: .5, duration: .5, ease: 'linear'}),
    })

    ScrollTrigger.batch(products, {
      start:'top 70%',
      end:'bottom bottom',
      scrub: 1,
      onEnter: batch => gsap.to(batch, {x: 0, autoAlpha: 1, stagger: .5, duration: 1,  ease: 'bounce'}),
      onLeaveBack: batch => gsap.to(batch, {x: '+80', autoAlpha: 0, stagger: .5, duration: 1,  ease: 'linear'}),
    })
  });


    return (
      <article>
          <h1>Products</h1>
          <div className="products">
            {productsOptionsToDisplay}
          </div>
      </article>
    )
}

export default Products;