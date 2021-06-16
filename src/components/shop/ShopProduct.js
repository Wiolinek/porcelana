import React, { useRef } from 'react';

import '../../styles/sass/shop/shop-product.sass';

import { gsap } from "gsap";


const ShopProduct = (props) => {

    const { addToCartHandler, product, warning } = props;
    let clickedProduct = useRef();
    let warningVisibility = useRef();

    let warningDisplayHandler = () => {
        warningVisibility.current.style.setProperty("opacity", 1);
        setTimeout(() => {
            warningVisibility.current.style.setProperty("opacity", 0);
            gsap.to(warningVisibility.current, {opacity: 0, duration: 3})
        }, 1500)
        
    }

    const addHandler = (e) => {
        let id = e.currentTarget.id;
        let name = product.name; //items it productsData table are counted from 0
        let price = product.price;
        let quantity = clickedProduct.current.value;
        let max = clickedProduct.current.max;
        addToCartHandler(id, name, price, quantity, max, clickedProduct)
    }


    return (
        <>
            <li className="product" key={product.id} product={product}>
                <div className="product-description">
                    <div><p>{product.name}</p></div>
                    <p>{product.price} EUR</p>    
                </div>
                <div className="product-photo">
                    <img src={product.image} alt={product.alt_text}></img>
                    <div className="product-details">
                        <p>Height: {product.height} cm</p>
                        <p>Diameter: {product.diameter} cm</p>
                        <p>Weight: {product.weight} g</p>
                        <p>Units per box: {product.units_per_box}</p>
                        <p>Dishwasher-safe: {product.dishwasher_safe}</p>
                        <p>Suitable for microwaves: {product.suitable_for_microwaves}</p>
                    </div>
                    <i className="fas fa-info-circle"></i>
                </div>
                <div className="choose-quantity">
                    <p>Choose quantity:</p>
                    <label forhtml="quantity">
                        <input type="number" className="pcs" placeholder="0" min="0" max="24" id={product.id} name={product.name} price={product.price} ref={clickedProduct}></input>
                    </label>
                    <p className="warning" ref={warningVisibility}>You cannot order more than 24 pcs</p>
                    {warning === product.id ? warningDisplayHandler() : null}
                    <input type="button" className="add-to-cart" value="Add to cart" id={product.id} name={product.name} price={product.price} onClick={addHandler}></input>
                </div>
            </li>
        </>
    )

}


export default ShopProduct;