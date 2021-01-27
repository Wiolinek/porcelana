import React, { useState } from 'react';
import ShopProducts from "./ShopProducts";
import ShopMenu from "./ShopMenu";
import ShopCart from "./ShopCart";

import '../styles/sass/shop.sass';

import { productsData  } from '../../src/data_products.js';

const Shop = () => {

    let [searchText, setSearchText] = useState("");
    let [optionSelected, setOptionSelected] = useState("All");
    let [cartProductsList, setCartProductsList] = useState([]);

    const searchProductHandler = (e) => {
        setSearchText(e.target.value);
        setOptionSelected("All");
    };

    const productsFilterHandler = (e) => {
        setOptionSelected(e.target.value);
        console.log(e.target.value);
    };

    const addToCartHandler = (e, product) => {
        setCartProductsList([...cartProductsList, product]
        )
        console.log(e.target.id)
        // console.log(e.target.name);
        // console.log(e.target.price);
        // console.log(e.target.category);
        // console.log(e.target.size);
        // console.log(e.target.alt_text);
        // console.log(cartProductsList);
    }

    return (
        <div>
            <div className="shop" id="shop">
                <ShopMenu searchProductHandler={searchProductHandler} searchText={searchText} productsFilterHandler={productsFilterHandler}/>
                <ShopProducts productsData={productsData} searchText={searchText} optionSelected={optionSelected} addToCartHandler={addToCartHandler}/>
                <ShopCart cartProductsList={cartProductsList} productsData={productsData} addToCartHandler={addToCartHandler}/>
            </div>
        </div>
    );

}



export default Shop;