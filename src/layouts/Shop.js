import React, { useEffect, useState } from 'react';

import { useParams } from "react-router-dom";

import ShopProducts from "../components/shop/ShopProducts";
import ShopMenu from "../components/shop/ShopMenu";
import ShopCart from "../components/shop/ShopCart";
import ShopFooter from "../components/shop/ShopFooter";

import '../styles/sass/shop/shop.sass';

import axios from "axios";

const Shop = () => {

    const [productsData, setProductsData] = useState([]);
    const { categoryLink } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:3030/products`)
            .then(response => {
            const products = response.data;
            setProductsData(products);
            })
    }, []);

    const [searchText, setSearchText] = useState("");
    const [optionSelected, setOptionSelected] = useState('All');
    console.log(optionSelected);
    console.log(categoryLink);

    const [cartProductsList, setCartProductsList] = useState([]);

    const [warning, setWarning] = useState(false);
 
    const searchProductHandler = (e) => {
        setSearchText(e.target.value);
        setOptionSelected("All");
    };

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
                <ShopCart cartProductsList={cartProductsList} setCartProductsList={setCartProductsList} />
            </aside>
            <footer className="shop-footer">
                <ShopFooter />
            </footer>
        </section>
    );

}



export default Shop;