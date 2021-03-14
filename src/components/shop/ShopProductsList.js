import React from 'react';

import ShopOnLoader from "./ShopOnLoader";
import ShopProduct from "./ShopProduct";

import '../../styles/sass/shop/shop-products-list.sass';


const ShopProductsList = (props) => {

    const searchText = props.searchText.toLowerCase();
    const { addToCartHandler, productsData, optionSelected, warning } = props;
  
    // look for a product based on text input
    let productsList = productsData.filter(product => product.category.toLowerCase().includes(searchText) || product.name.toLowerCase().includes(searchText));
    
    // look for a product based on menu option selected by user
    productsList = productsList.filter(product => product.categories.includes(optionSelected * 1));

    // list of product generated to display based on text or option selected by user
    productsList = productsList.map(product => (
        <ShopProduct key={product.id} addToCartHandler={addToCartHandler} product={product} warning ={warning}/>
    ));

    return (
        <>
            {productsList.length > 0 ?
            (<ul className="products-list">
                {productsList}
            </ul>)
            : <ShopOnLoader />}
        </>
    )

}


export default ShopProductsList;