import React from 'react';

import '../../styles/sass/shop-products.sass';


const ShopProducts = (props) => {

    const searchText = props.searchText.toLowerCase();
    const { optionSelected, addToCartHandler, productsData, warning } = props;
  
    // look for a product based on text input
    let productsList = productsData.filter(product => product.category.toLowerCase().includes(searchText) || product.name.toLowerCase().includes(searchText));

    // look for a product based on menu option selected by user
    productsList = productsList.filter(product => product.category.includes(optionSelected));
    
    // list of product generated to display based on text or option selected by user
    productsList = productsList.map(product => (
        <li className="product" key={product.id} product={product}>
            <div className="product-description">
                <div><p>{product.name}</p></div>
                <p>{product.price} EUR</p>    
            </div>
            <div className="product-photo"><img src={product.image} alt={product.alt_text}></img></div>
            <div className="choose-quantity">
                <p>Choose quantity:</p>
                <label forhtml="quantity"><input type="number" className="pcs" placeholder="0" min="0" max="24" id={product.id} name={product.name} price={product.price}></input></label>
                <div className="warning">{warning ? <p>You cannot order more than 24 pcs</p> : <p></p>}</div>
                <input type="button" className="add-to-cart" value="Add to cart" id={product.id} name={product.name} price={product.price} onClick={addToCartHandler}></input>
            </div>
        </li>
    ));
 

    return (
        <ul className="products-list">
            {productsList}
        </ul>
    )

}


export default ShopProducts;