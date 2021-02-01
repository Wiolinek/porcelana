import React, { useState } from 'react';
import ShopProducts from "./ShopProducts";
import ShopMenu from "./ShopMenu";
import ShopCart from "./ShopCart";

import '../styles/sass/shop.sass';

import productsData from '../data_products';

const Shop = () => {

    console.log(productsData);

    let [searchText, setSearchText] = useState("");
    let [optionSelected, setOptionSelected] = useState("All");

    let [waitingRoom, setWaitingRoom] = useState([]); //I use that to gather products with quantity chosen but not added to cart yet
    let [cartProductsList, setCartProductsList] = useState([]);
 
    const searchProductHandler = (e) => {
        setSearchText(e.target.value);
        setOptionSelected("All");
    };

    const productsFilterHandler = (e) => {
        setOptionSelected(e.target.value);
    };

    const addToWaitingRoomHandler = (e, item) => {
        let id = e.target.id;
        let name = productsData[e.target.id].name;
        let price = productsData[e.target.id].price;
        let quantity = e.target.value;

        let isInWaitingRoom = waitingRoom.find(item => item.id === e.target.id); //check if product is in waiting room already
 
        if (isInWaitingRoom) { // if product is in waiting room - update only quantity
            setWaitingRoom(waitingRoom.map(item => item.id === e.target.id && {...item, id, name, price, quantity}));
        } else {  //if product is not in waiting room - add it and update waiting room
            setWaitingRoom([...waitingRoom, {...item, id, name, price, quantity}]); 
        }
    }

    // DODAĆ FUNKCJĘ WYRZUCANIA Z KOSZYKA JEŚLI ILOŚĆ = 0

    const addToCartHandler = (e, item) => {
        let isInWaitingRoom = waitingRoom.find(item => item.id === e.target.id); //looking for product in waiting room and fetching quantity
        console.log(isInWaitingRoom); //zwraca obiekt lub undefined
        
        if(isInWaitingRoom) { //if product is in waiting room add to cart
            console.log(isInWaitingRoom);
            let isInCart = cartProductsList.find(item => item.id === e.target.id);
            let id = waitingRoom.id; // fetching product ID from waiting room

            setCartProductsList([...cartProductsList, isInWaitingRoom]);
            setWaitingRoom(waitingRoom.filter(item => item.id !== e.target.id && waitingRoom)); //delete added to cart product from waiting room

            // DODAĆ ZEROWANIE INPUTA PO WRZUCENIU PRODUKTU DO KOSZYKA

            // DODAWANIE OBU STANÓW - ZROBIĆ

            if(isInCart){ // if product is already in cart add quantity from cart and quantity from waiting room
                setCartProductsList(cartProductsList.map(item => item.id === id && {...isInCart, quantity: cartProductsList.quantity + waitingRoom.quantity}));
            }
        } else {
            //do nothing if product is not in waiting room - it means quantity is not been chosen so it equals 0
        }  
    }

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