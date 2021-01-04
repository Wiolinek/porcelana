import React from 'react';
import '../styles/Shop.css';
import { productsData  } from '../../src/data_products.js';


const ShopProducts = () => {

    let productItem = productsData.map(product => (
        <li key={product.id} className="product">
            <div className="description">
                <p>{product.name}</p>
                <p>{product.size}</p>
                <p>{product.price} EUR</p>
                <img src={product.image} alt={product.alt_text}></img>
            </div>
            <div className="choose-quantity">
                <p>Choose quantity:</p>
                <label forHTML="quantity"><input type="number" id="quantity" className="pcs" placeholder="0" min="0" max="24" /*value={e.target.value}*/></input></label>
                <input type="button" className="add-to-cart" value="Add to cart" /*onClick={addToCartHandler}*/></input>
            </div>
        </li>
        )
    )

    return (
        <ul className="shop-products">
            {productItem}    
        </ul>
    )

}


export default ShopProducts;