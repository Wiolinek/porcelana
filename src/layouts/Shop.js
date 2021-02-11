import React, { useState } from 'react';
import ShopProducts from "./ShopProducts";
import ShopMenu from "./ShopMenu";
import ShopCart from "./ShopCart";



import '../styles/sass/shop.sass';

import productsData from '../data_products';

const Shop = () => {

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

        let isInWaitingRoom = waitingRoom.find(item => item.id === e.target.id); //check if product is in waiting room already by click on Add To Cart button
 
        if (isInWaitingRoom) { // if product is in waiting room - update only quantity
            setWaitingRoom(waitingRoom.map(item => item.id === e.target.id && {...item, id, name, price, quantity}));
        } else {  //if product is not in waiting room - add it and update waiting room
            setWaitingRoom([...waitingRoom, {...item, id, name, price, quantity}]); 
        }
    }

    // DODAĆ FUNKCJĘ WYRZUCANIA Z POCZEKALNI JEŚLI ILOŚĆ = 0

    const addToCartHandler = (e) => {
        let isInWaitingRoom = waitingRoom.find(item => item.id === e.target.id); //looking for product in waiting room and fetching quantity
        
        if(isInWaitingRoom) { //if product is in waiting room add to cart
            let isInCart = cartProductsList.find(item => item.id === e.target.id);

            setCartProductsList([...cartProductsList, isInWaitingRoom]);
            setWaitingRoom(waitingRoom.filter(item => item.id !== e.target.id && waitingRoom)); //delete added to cart product from waiting room

            // DODAĆ ZEROWANIE INPUTA PO WRZUCENIU PRODUKTU DO KOSZYKA

            if(isInCart){ // if product is already in cart add quantity from cart and quantity from waiting room
                let isInCartQuantity = isInCart.quantity * 1 + isInWaitingRoom.quantity * 1; // sum of inCart quantity and waitingRoom quantity changed into type = number
                // find item which has to be updated and update quantity, if item has different id - do not do anything with that
                setCartProductsList(cartProductsList.map(item => item.id === isInCart.id ? {...isInCart, quantity: isInCartQuantity} : item));
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
                <ShopCart cartProductsList={cartProductsList} setCartProductsList={setCartProductsList} productsData={productsData}/>
            </div>
        </div>
    );

}



export default Shop;