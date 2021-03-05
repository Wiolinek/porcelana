import React, { useEffect, useRef } from 'react';
import { NavLink } from "react-router-dom";

import '../../styles/sass/main/products.sass';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const Products = () => {

    const productsWrapper = useRef(null);

    useEffect(() => {

        gsap.fromTo(productsWrapper.current.children, {y: '+=150', scale: 1.5, autoAlpha: 0}, {y: 0, autoAlpha: 1, scale: 1, stagger: .5,
          scrollTrigger: {
            trigger: productsWrapper.current,
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


    }, [])

    return (
            <div>
                <h1>Products</h1>
                <div className="products" ref={productsWrapper}>
                    <div>
                      <div className="product-photo mugs"><p>Mugs</p><div className="more-btn"><NavLink to="/shop" target="_blank">More</NavLink></div></div>
                      <div className="product-info"><p>dcewvgavc Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero nobis dolorum nulla ad mollitia temporibus repudiandae eaque ducimus laboriosam itaque impedit nam quas quisquam in maiores necessitatibus numquam eum corporis molestias, quasi veritatis. Corporis praesentium voluptatem accusantium enim laborum aperiam, debitis aut facere ut labore! Totam possimus nemo esse hic?</p></div>
                    </div>
                    <div>
                      <div className="product-photo cups"><p>Cups</p><div className="more-btn"><NavLink to="/shop" target="_blank">More</NavLink></div></div>
                      <div className="product-info"><p>dcewvgavc Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero nobis dolorum nulla ad mollitia temporibus repudiandae eaque ducimus laboriosam itaque impedit nam quas quisquam in maiores necessitatibus numquam eum corporis molestias, quasi veritatis. Corporis praesentium voluptatem accusantium enim laborum aperiam, debitis aut facere ut labore! Totam possimus nemo esse hic?</p></div>
                    </div>
                    <div>
                      <div className="product-photo pots"><p>Coffee Pots</p><div className="more-btn"><NavLink to="/shop" target="_blank">More</NavLink></div></div>
                      <div className="product-info"><p>dcewvgavc Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero nobis dolorum nulla ad mollitia temporibus repudiandae eaque ducimus laboriosam itaque impedit nam quas quisquam in maiores necessitatibus numquam eum corporis molestias, quasi veritatis. Corporis praesentium voluptatem accusantium enim laborum aperiam, debitis aut facere ut labore! Totam possimus nemo esse hic?</p></div>
                    </div>
                    <div>
                      <div className="product-photo plates"><p>Plates</p><div className="more-btn"><NavLink to="/shop" target="_blank">More</NavLink></div></div>
                      <div className="product-info"><p>dcewvgavc Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero nobis dolorum nulla ad mollitia temporibus repudiandae eaque ducimus laboriosam itaque impedit nam quas quisquam in maiores necessitatibus numquam eum corporis molestias, quasi veritatis. Corporis praesentium voluptatem accusantium enim laborum aperiam, debitis aut facere ut labore! Totam possimus nemo esse hic?</p></div>
                    </div>
                    <div>
                      <div className="product-photo bowls"><p>Bowls</p><div className="more-btn"><NavLink to="/shop" target="_blank">More</NavLink></div></div>
                      <div className="product-info"><p>dcewvgavc Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero nobis dolorum nulla ad mollitia temporibus repudiandae eaque ducimus laboriosam itaque impedit nam quas quisquam in maiores necessitatibus numquam eum corporis molestias, quasi veritatis. Corporis praesentium voluptatem accusantium enim laborum aperiam, debitis aut facere ut labore! Totam possimus nemo esse hic?</p></div>
                    </div>
                    <div>
                      <div className="product-photo vases"><p>Vases</p><div className="more-btn"><NavLink to="/shop" target="_blank">More</NavLink></div></div>
                      <div className="product-info"><p>dcewvgavc Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero nobis dolorum nulla ad mollitia temporibus repudiandae eaque ducimus laboriosam itaque impedit nam quas quisquam in maiores necessitatibus numquam eum corporis molestias, quasi veritatis. Corporis praesentium voluptatem accusantium enim laborum aperiam, debitis aut facere ut labore! Totam possimus nemo esse hic?</p></div>
                    </div>
                </div>
            </div>
    )
}

export default Products;