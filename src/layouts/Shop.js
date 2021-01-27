import React, { useState } from 'react';
import ShopProducts from "./ShopProducts";
import ShopMenu from "./ShopMenu";
import ShopCart from "./ShopCart";

import '../styles/sass/shop.sass';

import { productsData  } from '../../src/data_products.js';

const Shop = () => {

    let [searchText, setSearchText] = useState("");
    let [optionSelected, setOptionSelected] = useState("All");
    let cartProductsList = [];

    const searchProductHandler = (e) => {
        setSearchText(e.target.value);
        setOptionSelected("All");
    }

    const productsFilterHandler = (e) => {
        setOptionSelected(e.target.value);
        console.log(e.target.value);
    }

    const addToCartHandler = (e) => {
        cartProductsList.push({
            id: e.target.id,
            name: e.target.name,
            price: e.target.price,
            quantity: 1,
        })
        // setCartState(.push({
        //     id: productsData.id,
        //     name: productsData.name,
        //     price: productsData.price,
        //     quantity: 0,
        // }))
        console.log(e.target.id);
        console.log(e.target.name);
        console.log(e.target.price);
        console.log(cartProductsList);

    }

    return (
        <div>
            <div className="shop" id="shop">
                <ShopMenu searchProductHandler={searchProductHandler} searchText={searchText} productsFilterHandler={productsFilterHandler}/>
                <ShopProducts productsData={productsData} searchText={searchText} optionSelected={optionSelected} addToCartHandler={addToCartHandler}/>
                <ShopCart cartProductsList={cartProductsList}/>
            </div>
        </div>
    );

}



export default Shop;