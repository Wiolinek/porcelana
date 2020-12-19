import React from 'react';

import '../styles/Shop.css';


const productsList = [
    {   
        id: 0,
        name: "Cup",
        category: "Cups",
        size: "8cm",
        price: 3.99,
        image: '../image/cup_1_small.jpg',
    },
    {   
        id: 1,
        name: "Cup",
        category: "Cups",
        size: "9cm",
        price: 3.99,
        image: '../image/cup_1_small.jpg',
    },
    {   
        id: 2,
        name: "Cup",
        category: "Cups",
        size: "9cm",
        price: 3.99,
        image: '../image/cup_1_small.jpg',
    },
    {   
        id: 3,
        name: "Cup",
        category: "Cups",
        size: "9cm",
        price: 3.99,
        image: '../image/cup_1_small.jpg',
    },
    {
        id: 4,
        name: "Cup",
        category: "Cups",
        size: "9cm",
        price: 3.99,
        image: '../image/cup_1_small.jpg',
    },
    {
        id: 5,
        name: "Cup",
        category: "Cups",
        size: "9cm",
        price: 3.99,
        image: '../image/cup_1_small.jpg',
    },
    {
        id: 6,
        name: "Cup",
        category: "Cups",
        size: "9cm",
        price: 3.99,
        image: '../image/cup_1_small.jpg',
    },
    {
        id: 7,
        name: "Cup",
        category: "Cups",
        size: "9cm",
        price: 3.99,
        image: '../image/cup_1_small.jpg',
    },
    {
        id: 8,
        name: "Cup",
        category: "Cups",
        size: "9cm",
        price: 3.99,
        image: '../image/cup_1_small.jpg',
    },
    {
        id: 9,
        name: "Cup",
        category: "Cups",
        size: "9cm",
        price: 3.99,
        image: '../image/cup_1_small.jpg',
    },
]

const Shop = () => {

    let productItem = productsList.map(product => (
        <li key={product.id}>
            <p>{product.name}</p>
            <p>{product.size}</p>
            <p>{product.price}</p>
            <img src={product.image} alt="product"></img>
        </li>
        )
    )

    return (
            <div>
                <h1 className="shop-title">Shop</h1>
                <div className="shop"></div>
                <div className="filter"></div>
                <ul className="products">{productItem}</ul>
                <div className="cart"></div>
            </div>
    )

}



export default Shop;