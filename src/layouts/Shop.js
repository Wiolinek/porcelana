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
    let [waitingRoom, setWaitingRoom] = useState([]); //I use that to gather products with quantity chosen but not added to cart yet
 
    const searchProductHandler = (e) => {
        setSearchText(e.target.value);
        setOptionSelected("All");
    };

    const productsFilterHandler = (e) => {
        setOptionSelected(e.target.value);
        console.log(e.target.value);
    };

    const addToWaitingRoomHandler = (e, item) => {
        let id = e.target.id;
        let quantity = e.target.value;
        let inCartProduct = waitingRoom.find(item => item.id === e.target.id); //check if product is in waiting room already

        if(inCartProduct) { // if product is in waiting room increase quantity only
            setWaitingRoom(waitingRoom.map(item => item.id === id ? {...inCartProduct, quantity: e.target.value} : item))
        } else { //if product is not in waiting room - add it and update waiting room
            setWaitingRoom([...waitingRoom, {id, quantity}]);
            console.log(waitingRoom);
        }
    }

    const addToCartHandler = (e, item) => {
        let addedToCartItem = waitingRoom.find(item => item.id === e.target.id); //looking for product in waiting room and fetching quantity
        if(addedToCartItem) { //if product is in waiting room add to cart
            setCartProductsList([...cartProductsList, addedToCartItem]);
            setWaitingRoom(waitingRoom.filter(item => item.id !== e.target.id ? waitingRoom : null)); //delete added to cart product from waiting room
            //DODAĆ ZEROWANIE INPUTA PO WRZUCENIU PRODUKTU DO KOSZYKA
        } else {
            //do nothing if product is not in waiting room - it means qantity is not been chosen so equals 0
        }  
    }

    console.log(cartProductsList);
    // console.log(cartProductsList.id);
    // console.log(cartProductsList.quantity);  

    return (
        <div>
            <div className="shop" id="shop">
                <ShopMenu searchProductHandler={searchProductHandler} searchText={searchText} productsFilterHandler={productsFilterHandler}/>
                <ShopProducts productsData={productsData} searchText={searchText} optionSelected={optionSelected} addToCartHandler={addToCartHandler} addToWaitingRoomHandler={addToWaitingRoomHandler}/>
                <ShopCart cartProductsList={cartProductsList} productsData={productsData}/>
            </div>
        </div>
    );

}



export default Shop;