import React from 'react';

import ShopProduct from "./ShopProduct";
import ShopOnLoader from "./ShopOnLoader";
import ShopNoSearchResults from "./ShopNoSearchResults";

import '../../styles/sass/shop/shop-products-list.sass';


const ShopProductsList = (props) => {

    const searchText = props.searchText.toLowerCase();
    const { addToCartHandler, productsData, optionSelected, warning, chosenQuantity } = props;
  
    // look for a product based on text input
    let productsList = productsData.filter(product => product.category.toLowerCase().includes(searchText) || product.name.toLowerCase().includes(searchText));
    
    productsList = productsList.filter(product => product.categories.includes(optionSelected * 1)); // look for a product based on menu option selected by user

    productsList = productsList.map(product => (
        <ShopProduct key={product.id} addToCartHandler={addToCartHandler} product={product} warning={warning} chosenQuantity={chosenQuantity}/>
    )); // list of product generated to display based on text or option selected by user

    return (
        <>
            {productsList.length === 0 ? (searchText.length === 0 ? <ShopOnLoader /> : <ShopNoSearchResults />) : 
            <ul className="products-list">
                {productsList}
            </ul>
            }
        </>
    )

}


export default ShopProductsList;