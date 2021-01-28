import React, { useState } from 'react';
import ShopProducts from "./ShopProducts";
import ShopMenu from "./ShopMenu";
import ShopCart from "./ShopCart";

import '../styles/sass/shop.sass';

import productsData from '../../src/data_products.js';

const Shop = () => {

    let { item } = productsData; //ta destrukturyzacja działa ?

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

    const addToCartHandler = (e) => { //może zamiast wrzucania do stanu obiektów wrzucić same id i potem wyszukać resztę danych w innej funkcji ?
        let id = e.target.id;
        setCartProductsList([...cartProductsList, {id, quantity: 1}]); //problem w tym że tutaj ten product jest undefined.. quantity się bezproblemowo dodaje do stanu
         //to się z eventu wyciąga
        // console.log(cartProductsList);
        // console.log(product);
        // console.log(e.target.name); //to się z eventu wyciąga
        // console.log(e.target.price); //to jest w evencie undefined
        // console.log(e.target.category);
        // console.log(e.target.size); //to jest w evencie undefined
        // console.log(e.target.alt_text);
        // console.log(cartProductsList);
    }

    return (
        <div>
            <div className="shop" id="shop">
                <ShopMenu searchProductHandler={searchProductHandler} searchText={searchText} productsFilterHandler={productsFilterHandler}/>
                <ShopProducts productsData={productsData} searchText={searchText} optionSelected={optionSelected} item={item} addToCartHandler={addToCartHandler}/>
                <ShopCart cartProductsList={cartProductsList} productsData={productsData}/>
            </div>
        </div>
    );

}



export default Shop;