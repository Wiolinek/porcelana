import React, { useState } from 'react';
import ShopProducts from "./ShopProducts";
import ShopMenu from "./ShopMenu";
import ShopCart from "./ShopCart";

import '../styles/sass/shop.sass';

import { productsData  } from '../../src/data_products.js';

const Shop = () => {

    let [searchText, setSearchText] = useState("");
    let [optionSelected, setOptionSelected] = useState("Show All")

    const searchProductHandler = (e) => {
        setSearchText(e.target.value);
        setOptionSelected("Cups");
    }

    const productsFilterHandler = (e) => {
        setOptionSelected(e.target.value);
        console.log(e.target.value);
    }


    return (
        <div>
            <div className="shop" id="shop">
                <ShopMenu searchProductHandler={searchProductHandler} searchText={searchText} productsFilterHandler={productsFilterHandler}/>
                <ShopProducts productsData={productsData} searchText={searchText} optionSelected={optionSelected}/>
                <ShopCart />
            </div>
        </div>
    );

}



export default Shop;