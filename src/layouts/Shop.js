import React, { useState } from 'react';

import ShopProducts from "./ShopProducts";
import ShopMenu from "./ShopMenu";
import ShopCart from "./ShopCart";
import ShopFooter from "./ShopFooter";

import '../styles/sass/shop.sass';

import productsData from '../data_products';

const Shop = () => {

    // const productsData = JSON.parse(productsDatabase);

    let [searchText, setSearchText] = useState("");
    let [optionSelected, setOptionSelected] = useState("All");

    let [cartProductsList, setCartProductsList] = useState([]);

    let [warning, setWarning] = useState(false);
 
    const searchProductHandler = (e) => {
        setSearchText(e.target.value);
        setOptionSelected("All");
    };

    console.log(optionSelected);

const filterProductHandler = (e) => {
        setOptionSelected(e.target.value);
    };

    const addToCartHandler = (e) => {
        let id = e.target.id;
        let name = productsData[e.target.id].name;
        let price = productsData[e.target.id].price;
        let quantity = e.currentTarget.previousSibling.previousSibling.firstChild.value;
        
        let isInCart = cartProductsList.find(item => item.id === e.target.id);

        if(quantity > 0) {
            setCartProductsList([...cartProductsList, {...isInCart, id, name, price, quantity}]);
            e.currentTarget.previousSibling.previousSibling.firstChild.value = 0;

            if(isInCart) { // if product is already in cart add quantity from cart and quantity from waiting room
                let isInCartQuantity = isInCart.quantity * 1 + quantity * 1; // sum of inCart quantity and waitingRoom quantity changed into type = number
            // find item which has to be updated and update quantity, if item has different id - do not do anything with that
            
                if(isInCartQuantity > e.currentTarget.previousSibling.previousSibling.firstChild.max * 1) {
                    setCartProductsList(cartProductsList);
                    setWarning(true);
                } else {
                    setCartProductsList(cartProductsList.map(item => item.id === isInCart.id ? {...isInCart, quantity: isInCartQuantity} : item));
                    setWarning(false);
                }
            }
        }
    }

    return (
        <section className="shop">
            <header className="shop-header">
                <ShopMenu searchProductHandler={searchProductHandler} filterProductHandler={filterProductHandler} optionSelected={optionSelected}/>
            </header>
            <main className="shop-products">
                <ShopProducts productsData={productsData} searchText={searchText} optionSelected={optionSelected} addToCartHandler={addToCartHandler} warning={warning}/>
            </main>
            <aside className="cart">
                <ShopCart cartProductsList={cartProductsList} setCartProductsList={setCartProductsList} productsData={productsData}/>
            </aside>
            <footer className="shop-footer">
                <ShopFooter />
            </footer>
        </section>
    );

}



export default Shop;