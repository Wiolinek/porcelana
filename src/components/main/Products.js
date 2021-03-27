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
    // const buttons = gsap.utils.toArray('.more-btn');
    const photos = gsap.utils.toArray('.product-photo');
    // const productsCarts = gsap.utils.toArray('.product-cart');

    gsap.set(products, {x: '+80', autoAlpha: 0});
    // gsap.set(buttons, {scale: 0});
    // gsap.set(photos, {x: '+100', autoAlpha: 0});
    gsap.set(photos, {y: '+80', x: '-80', autoAlpha: 0})
    // gsap.set(productsCarts, {x: '0'});


    // ScrollTrigger.batch(productsCarts, {
    //   scrub: 1,
    //   start:'top 100%',
    //   onEnter: batch => gsap.fromTo(batch, {x: '-=150'}, {x: '0', stagger: .5, duration: 1.5, ease: 'none'})
    // })

    ScrollTrigger.batch(photos, {
      start:'top 70%',
      end:'bottom bottom',
      scrub: 1,
      onEnter: batch => gsap.to(batch, {y: 0, x: 0, autoAlpha: 1, stagger: .5, duration: .5, ease: 'linear', delay: -.5}),
      onLeaveBack: batch => gsap.to(batch, {y: '+80', x: '-80',autoAlpha: 0, stagger: .5, duration: .5, ease: 'linear'}),
      // markers:true,
      // toggleActions:'play restart reverse reverse',
    })

    ScrollTrigger.batch(products, {
      start:'top 70%',
      end:'bottom bottom',
      scrub: 1,
      onEnter: batch => gsap.to(batch, {x: 0, autoAlpha: 1, stagger: .5, duration: 1,  ease: 'bounce'}),
      onLeaveBack: batch => gsap.to(batch, {x: '+80', autoAlpha: 0, stagger: .5, duration: 1,  ease: 'linear'}),
      // toggleActions:'play restart reverse reverse',
    })

    // ScrollTrigger.batch(buttons, {
    //   onEnter: batch => gsap.fromTo(batch, {scale: 0}, {scale: 1, duration: 2, delay: 1})
    // })

    // ScrollTrigger.batch(photos, {
    //   start:'top 70%',
    //   end:'bottom bottom',
    //   scrub: 1,
    //   onEnter: batch => gsap.to(batch, {x: 0, autoAlpha: 1, stagger: .5, duration: .5, ease: 'linear'}),
    //   onLeaveBack: batch => gsap.to(batch, {x: '+100', autoAlpha: 0, stagger: .5, duration: .5, ease: 'linear'}),
      // markers:true,
      // toggleActions:'play restart reverse reverse',
    // })


    // products.forEach((products) => {
    //   gsap.staggerFrom(products, {x: '+=150', autoAlpha: 0}, {x: 0, autoAlpha: 1, stagger: .5,
    //     ScrollTrigger: {
    //       trigger: products,
    //       // toggleClass: 'active',
    //       start:'top 100%',
    //       end:'bottom bottom',
    //       scrub: 1,
    //           // pin: true,
    //           //events: onEnter onLeave onEnterBack onLeaveBack
    //       toggleActions:'play restart complete reverse',
    //           //options: play plause resume reset restart complete reverse none
    //           // markers:true,
    //     }})
    // });


    // gsap.fromTo(productsOptionsWrapper.current.children, {y: '+=150', scale: 1.5, autoAlpha: 0}, {y: 0, autoAlpha: 1, scale: 1, stagger: .5,
    //     scrollTrigger: {
    //       trigger: productsOptionsWrapper.current,
    //       start:'top 100%',
    //       end:'bottom bottom',
    //       scrub: 1,
    //         // pin: true,
    //         //events: onEnter onLeave onEnterBack onLeaveBack
    //       toggleActions:'play restart complete reverse',
    //         //options: play plause resume reset restart complete reverse none
    //         // markers:true,
    //     }})

      // .fromTo(productsDescriptionWrapper.current, {x: '+=150', autoAlpha: 0}, {x: 0, autoAlpha: 1, stagger: .5,
      //   scrollTrigger: {
      //     trigger: productsDescriptionWrapper.current,
      //     start:'top 100%',
      //     end:'bottom bottom',
      //     scrub: 1,
      //       // pin: true,
      //       //events: onEnter onLeave onEnterBack onLeaveBack
      //     toggleActions:'play restart complete reverse',
      //       //options: play plause resume reset restart complete reverse none
      //       // markers:true,
      //   }})

  });


    return (
            <>
                <h1>Products</h1>
                <div className="products">
                  {productsOptionsToDisplay}
                </div>
            </>
    )
}

export default Products;