import React from 'react';

import '../../styles/sass/shop/shop-product.sass';


const ShopProduct = (props) => {

    const { addToCartHandler, product, warning } = props;

    console.log(product.id);
    console.log(warning);

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
                    {/* <i class="fas fa-info"></i> */}
                    <i className="fas fa-info-circle"></i>
                </div>
                <div className="choose-quantity">
                    <p>Choose quantity:</p>
                    <label forhtml="quantity"><input type="number" className="pcs" placeholder="0" min="0" max="24" id={product.id} name={product.name} price={product.price}></input></label>
                    <div className="warning">{warning === product.id ? <p>You cannot order more than 24 pcs</p> : <p></p>}</div>
                    <input type="button" className="add-to-cart" value="Add to cart" id={product.id} name={product.name} price={product.price} onClick={addToCartHandler}></input>
                </div>
            </li>
        </>
    )

}


export default ShopProduct;