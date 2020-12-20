import React from 'react';

import '../styles/Shop.css';


const productsList = [
    {   
        id: 0,
        name: "Cup",
        category: "Cups",
        size: "8cm",
        price: 3.99,
        image: ["../images/cup_1_small.jpg"],
        alt_text: "cup",
    },
    {   
        id: 1,
        name: "Cup",
        category: "Cups",
        size: "9cm",
        price: 3.99,
        image: '../images/cup_1_small.jpg',
        alt_text: "cup",
    },
    {   
        id: 2,
        name: "Cup",
        category: "Cups",
        size: "9cm",
        price: 3.99,
        image: '../images/cup_1_small.jpg',
        alt_text: "cup",
    },
    {   
        id: 3,
        name: "Cup",
        category: "Cups",
        size: "9cm",
        price: 3.99,
        image: '../images/cup_1_small.jpg',
        alt_text: "cup",
    },
    {
        id: 4,
        name: "Cup",
        category: "Cups",
        size: "9cm",
        price: 3.99,
        image: '../images/cup_1_small.jpg',
        alt_text: "cup",
    },
    {
        id: 5,
        name: "Cup",
        category: "Cups",
        size: "9cm",
        price: 3.99,
        image: '/cup_1_small.jpg',
        alt_text: "cup",
    },
    {
        id: 6,
        name: "Cup",
        category: "Cups",
        size: "9cm",
        price: 3.99,
        image: '../images/cup_1_small',
        alt_text: "cup",
    },
    {
        id: 7,
        name: "Cup",
        category: "Cups",
        size: "9cm",
        price: 3.99,
        image: "cup_1_small.jpg",
        alt_text: "cup",
    },
    {
        id: 8,
        name: "Cup",
        category: "Cups",
        size: "9cm",
        price: 3.99,
        image: "../images/cup_1_small.jpg",
        alt_text: "cup",
    },
    {
        id: 9,
        name: "Cup",
        category: "Cups",
        size: "9cm",
        price: 3.99,
        image: "mug_1_small.jpg",
        alt_text: "cup",
    },
]

const Shop = () => {

    let productItem = productsList.map(product => (
        <li key={product.id} className="product">
            <p>{product.name}</p>
            <p>{product.size}</p>
            <p>{product.price}</p>
            <img src={product.image} alt={product.alt_text}></img>
            <button class="add-to-cart">Add to cart</button>
        </li>
        )
    )

    return (
            <div>
                <h1 className="shop-title">Shop</h1>
                <div className="shop">
                    <div className="filter"></div>
                        <ul className="shop-products">{productItem}</ul>
                    <div className="cart"></div>
                </div>
            </div>
    )

}



export default Shop;