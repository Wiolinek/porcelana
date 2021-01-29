import React from 'react';

import '../styles/sass/shop-products.sass';


const ShopProducts = (props) => {

    let productsList = props.productsData;
    let searchText = props.searchText.toLowerCase();
    let { optionSelected, addToCartHandler, addToWaitingRoomHandler } = props;
  
    productsList = productsList.filter(product => product.category.toLowerCase().includes(searchText) || product.name.toLowerCase().includes(searchText));

    productsList = productsList.filter(product => product.category.includes(optionSelected));
    
    productsList = productsList.map(product => (
        <li className="product" key={product.id} product={product}>
            <div className="description">
                <p>{product.name}</p>
                <p>{product.size}</p>
                <p>{product.price} EUR</p>
                <img src={product.image} alt={product.alt_text}></img>
            </div>
            <div className="choose-quantity">
                <p>Choose quantity:</p>
                <label forhtml="quantity"><input type="number" id={product.id} className="pcs" placeholder="0" min="0" max="24" onChange={addToWaitingRoomHandler}></input></label>
                <input type="button" className="add-to-cart" value="Add to cart" id={product.id} name={product.name} price={product.price} onClick={addToCartHandler}></input>
            </div>
        </li>
    ));
 

    return (
        <ul className="shop-products">
            {productsList}
        </ul>
    )

}


export default ShopProducts;