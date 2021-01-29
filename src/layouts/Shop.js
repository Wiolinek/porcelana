import React, { useState } from 'react';
import ShopProducts from "./ShopProducts";
import ShopMenu from "./ShopMenu";
import ShopCart from "./ShopCart";

import '../styles/sass/shop.sass';

import productsData from '../../src/data_products.js';

const Shop = () => {

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
        let isInWaitingRoom = waitingRoom.find(item => item.id === e.target.id); //check if product is in waiting room already

        if(isInWaitingRoom) { // if product is in waiting room - change quantity only
            setWaitingRoom(waitingRoom.map(item => item.id === id ? {...isInWaitingRoom, quantity: quantity} : item));
        } else if(isInWaitingRoom && item.quantity === '0'){

            //SPRAWDZIĆ TE OPCJE, NIE DZIAŁA WYWALENIE Z POCZEKALNI INDEKSÓW Z ILOŚCIĄ 0

            // setWaitingRoom(waitingRoom.filter(item => item.quantity !== '0' ? waitingRoom : null));
            setWaitingRoom(waitingRoom.filter(item => item.quantity > '0'));
            // setWaitingRoom(waitingRoom.filter(item => item.quantity !== '0' ? waitingRoom : null));



        } else if(!isInWaitingRoom){ //if product is not in waiting room - add it and update waiting room
            setWaitingRoom([...waitingRoom, {id, quantity}]);
        }  
    }

    const addToCartHandler = (e, item) => {
        let isInWaitingRoom = waitingRoom.find(item => item.id === e.target.id); //looking for product in waiting room and fetching quantity
        

        if(isInWaitingRoom) { //if product is in waiting room add to cart
            let isInCart = cartProductsList.find(item => item.id === e.target.id);
            let id = waitingRoom.id; // fetching product ID from waiting room
            let quantity = waitingRoom.quantity; // fetching product quantity from waiting room

            setCartProductsList([...cartProductsList, isInWaitingRoom]);
            setWaitingRoom(waitingRoom.filter(item => item.id !== e.target.id ? waitingRoom : null)); //delete added to cart product from waiting room
            //DODAĆ ZEROWANIE INPUTA PO WRZUCENIU PRODUKTU DO KOSZYKA

            // DODAWANIE OBU STANÓW - ZROBIĆ
            if(isInCart){ // if product is already in cart add quantity from cart and quantity from waiting room
                setCartProductsList(cartProductsList.map(item => item.id === id ? {...isInCart, quantity: cartProductsList.quantity + waitingRoom.quantity} : item));
            }
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