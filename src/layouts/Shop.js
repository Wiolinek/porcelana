import React from 'react';

import '../styles/Shop.css';
import image0 from '../images/cup_1_small.jpg';
import image1 from '../images/cup_1_small.jpg';
import image2 from '../images/cup_1_small.jpg';
import image3 from '../images/cup_1_small.jpg';
import image4 from '../images/cup_1_small.jpg';
import image5 from '../images/cup_1_small.jpg';
import image6 from '../images/cup_1_small.jpg';
import image7 from '../images/cup_1_small.jpg';
import image8 from '../images/cup_1_small.jpg';
import image9 from '../images/cup_1_small.jpg';
import image10 from '../images/cup_1_small.jpg';
import image11 from '../images/cup_1_small.jpg';

const productsList = [
    {   
        id: 0,
        name: "Cup",
        category: "Cups",
        size: "8cm",
        price: 3.99,
        image: image0,
        alt_text: "cup",
    },
    {   
        id: 1,
        name: "Cup",
        category: "Cups",
        size: "9cm",
        price: 3.99,
        image: image1,
        alt_text: "cup",
    },
    {   
        id: 2,
        name: "Cup",
        category: "Cups",
        size: "9cm",
        price: 3.99,
        image: image2,
        alt_text: "cup",
    },
    {   
        id: 3,
        name: "Cup",
        category: "Cups",
        size: "9cm",
        price: 3.99,
        image: image3,
        alt_text: "cup",
    },
    {
        id: 4,
        name: "Cup",
        category: "Cups",
        size: "9cm",
        price: 3.99,
        image: image4,
        alt_text: "cup",
    },
    {
        id: 5,
        name: "Cup",
        category: "Cups",
        size: "9cm",
        price: 3.99,
        image: image5,
        alt_text: "cup",
    },
    {
        id: 6,
        name: "Cup",
        category: "Cups",
        size: "9cm",
        price: 3.99,
        image: image6,
        alt_text: "cup",
    },
    {
        id: 7,
        name: "Cup",
        category: "Cups",
        size: "9cm",
        price: 3.99,
        image: image7,
        alt_text: "cup",
    },
    {
        id: 8,
        name: "Cup",
        category: "Cups",
        size: "9cm",
        price: 3.99,
        image: image8,
        alt_text: "cup",
    },
    {
        id: 9,
        name: "Cup",
        category: "Cups",
        size: "9cm",
        price: 3.99,
        image: image9,
        alt_text: "cup",
    },
    {
        id: 10,
        name: "Cup",
        category: "Cups",
        size: "9cm",
        price: 3.99,
        image: image10,
        alt_text: "cup",
    },
    {
        id: 11,
        name: "Cup",
        category: "Cups",
        size: "9cm",
        price: 3.99,
        image: image11,
        alt_text: "cup",
    },
]

const Shop = () => {

    let productItem = productsList.map(product => (
        <li key={product.id} className="product">
            <div>
                <p>{product.name}</p>
                <p>{product.size}</p>
                <p>{product.price}</p>
                <img src={product.image} alt={product.alt_text}></img>
                <button class="add-to-cart">Add to cart</button>
            </div>
        </li>
        )
    )

    return (
        <div>
            <div className="shop">
                <header className="shop-header">
                    <div className="advantages">
                        <div><i class="fas fa-shipping-fast"></i><p>Free shipping</p></div>
                        <div><i class="fas fa-undo-alt"></i><p>Easy returns</p></div>
                        <div><i class="fas fa-medal"></i><p>3 years warranty</p></div>
                        <div><i class="fas fa-thumbs-up"></i><p>Satisfaction guarantee</p></div>
                    </div>
                    <div className="search">
                        <label htmlFor="search">what are you looking for..?</label>
                        <input type="text" id="search" name="search"></input>
                        <i class="fas fa-search"></i>
                    </div>
                    <div className="logo shop-logo">
                        <p className="logo-name">ICM Inc.</p>
                    </div>
                    <ul className="shop-menu">
                        <li><p>Mugs</p></li>
                        <li><p>Cups</p></li>
                        <li><p>Coffee Pots</p></li>
                        <li><p>Plates</p></li>
                        <li><p>Bowls</p></li>
                        <li><p>Vases</p></li>
                    </ul>
                </header>
                <ul className="shop-products">{productItem}</ul>
                <div className="cart"></div>
            </div>
        </div>
    )

}



export default Shop;