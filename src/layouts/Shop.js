import React, { useEffect, useState } from 'react';

import { useParams } from "react-router-dom";

import ShopProductsList from "../components/shop/ShopProductsList";
import ShopMenu from "../components/shop/ShopMenu";
import ShopCart from "../components/shop/ShopCart";
import ShopFooter from "../components/shop/ShopFooter";

import '../styles/sass/shop/shop.sass';

import axios from "axios";

const Shop = () => {

    const [productsData, setProductsData] = useState([]);
    const [shopMenuOptions, setShopMenuOptions] = useState([]);
    const { categoryLink } = useParams();
    const [searchText, setSearchText] = useState("");
    const [optionSelected, setOptionSelected] = useState(1);
    const [cartProductsList, setCartProductsList] = useState([]);
    const [warningState, setWarningState] = useState(false);
   

    useEffect(() => {
        setTimeout(() => {
            axios.get(`http://localhost:3030/products`)
            .then(response => {
            let products = response.data;
            products.map(product => (product.categories = product.categories.split(',').map(item => parseInt(item))));
            setProductsData(products);
            })
        }, 700)
        
        axios.get(`http://localhost:3030/categories`)
            .then(response => {
            const categories = response.data;
            setShopMenuOptions(categories);     
            })
    }, []);

    useEffect(() => {

        let categoryId = shopMenuOptions.filter(option => option.link === categoryLink)

        if(categoryId[0]) {
        setOptionSelected(categoryId[0].id);
        }

    }, [shopMenuOptions, categoryLink]);

    const searchProductHandler = (e) => {
        setSearchText(e.target.value);
        setOptionSelected(1);
    };

    const filterProductHandler = (e) => {
        setOptionSelected(e.target.value);
        setSearchText("");
    };

    const addToCartHandler = (id, name, price, quantity, max, clickedProduct) => {

        let isInCart = cartProductsList.find(item => item.id === id);

        if(quantity > 0) {
            setCartProductsList([...cartProductsList, {...isInCart, id, name, price, quantity}]);
            clickedProduct.current.value= 0;
            
            if(isInCart) { // if product is already in cart add quantity from cart and quantity from waiting room

                let isInCartQuantity = isInCart.quantity * 1 + quantity * 1; // sum of inCart quantity and waitingRoom quantity changed into type = number
            // find item which has to be updated and update quantity, if item has different id - do not do anything with that

                if(isInCartQuantity > max * 1) {
                    setCartProductsList(cartProductsList);
                    setWarningState(id * 1);
                } else {
                    setCartProductsList(cartProductsList.map(item => item.id === isInCart.id ? {...isInCart, quantity: isInCartQuantity} : item));
                    setWarningState(false);
                }
            }
        }
    }


    return (
        <section className="shop">
            <header className="shop-header">
                <ShopMenu shopMenuOptions={shopMenuOptions} searchProductHandler={searchProductHandler} filterProductHandler={filterProductHandler} optionSelected={optionSelected}/>
            </header>
            <main>
                <ShopProductsList productsData={productsData} searchText={searchText} optionSelected={optionSelected} addToCartHandler={addToCartHandler} warning={warningState}/>
            </main>
            <aside className="cart">
                <ShopCart cartProductsList={cartProductsList} setCartProductsList={setCartProductsList} />
            </aside>
            <footer className="shop-footer-wrapper">
                <ShopFooter />
            </footer>
        </section>
    );

}



export default Shop;