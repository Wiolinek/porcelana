import React from 'react';

import '../styles/Shop.css';

import image0 from '../images/small_shop/cup_1_small.jpg';
import image1 from '../images/small_shop/cup_2_small.jpg';
import image2 from '../images/small_shop/bowl_1_small.jpg';
import image3 from '../images/small_shop/cup_6_small.jpg';
import image4 from '../images/small_shop/bowl_2_small.jpg';
import image5 from '../images/small_shop/cup_4_small.jpg';
import image6 from '../images/small_shop/cup_7_small.jpg';
import image7 from '../images/small_shop/cup_8_small.jpg';
import image8 from '../images/small_shop/cup_9_small.jpg';
import image9 from '../images/small_shop/cup_10_small.jpg';
import image10 from '../images/small_shop/cup_11_small.jpg';
import image11 from '../images/small_shop/cup_12_small.jpg';
import image12 from '../images/small_shop/cup_13_small.jpg';
import image13 from '../images/small_shop/bowl_3_small.jpg';
import image15 from '../images/small_shop/cup_16_small.jpg';
import image18 from '../images/small_shop/cup_19_small.jpg';
import image20 from '../images/small_shop/mug_1_small.jpg';
import image21 from '../images/small_shop/mug_2_small.jpg';
import image22 from '../images/small_shop/mug_3_small.jpg';
import image23 from '../images/small_shop/mug_4_small.jpg';
import image24 from '../images/small_shop/mug_5_small.jpg';
import image25 from '../images/small_shop/mug_6_small.jpg';
import image27 from '../images/small_shop/mug_8_small.jpg';
import image28 from '../images/small_shop/mug_9_small.jpg';
import image29 from '../images/small_shop/mug_10_small.jpg';
import image30 from '../images/small_shop/plate_2_small.jpg';
import image31 from '../images/small_shop/plate_1_small.jpg';
import image34 from '../images/small_shop/plate_5_small.jpg';
import image37 from '../images/small_shop/plate_8_small.jpg';
import image38 from '../images/small_shop/plate_9_small.jpg';
import image42 from '../images/small_shop/teapot_2_small.jpg';
import image43 from '../images/small_shop/teapot_3_small.jpg';
import image44 from '../images/small_shop/teapot_4_small.jpg';
import image47 from '../images/small_shop/teapot_7_small.jpg';
import image49 from '../images/small_shop/vase_1_small.jpg';
import image50 from '../images/small_shop/vase_2_small.jpg';
import image51 from '../images/small_shop/vase_3_small.jpg';
import image52 from '../images/small_shop/vase_4_small.jpg';
import image53 from '../images/small_shop/vase_5_small.jpg';
import image55 from '../images/small_shop/vase_7_small.jpg';

const productsList = [
    {   
        id: 0,
        name: "Cup \"I love You\"",
        category: "Cups",
        size: "8 cm",
        price: 3.99,
        image: image0,
        alt_text: "cup",
    },
    {   
        id: 1,
        name: "Cup \"English Afternoon\"",
        category: "Cups",
        size: "9 cm",
        price: 3.99,
        image: image1,
        alt_text: "cup",
    },
    {   
        id: 2,
        name: "Bowl \"Vintage Style\"",
        category: "Bowls",
        size: "9 cm",
        price: 3.99,
        image: image2,
        alt_text: "bowl",
    },
    {   
        id: 3,
        name: "Cup \"Golden Taste\"",
        category: "Cups",
        size: "9 cm",
        price: 3.99,
        image: image3,
        alt_text: "cup",
    },
    {
        id: 4,
        name: "Bowl \"Happy Breakfast\"",
        category: "Bowls",
        size: "9 cm",
        price: 3.99,
        image: image4,
        alt_text: "bowl",
    },
    {
        id: 5,
        name: "Cup \"White Passion\"",
        category: "Cups",
        size: "9 cm",
        price: 3.99,
        image: image5,
        alt_text: "cup",
    },
    {
        id: 6,
        name: "Cup \"Hot Chocolate\"",
        category: "Cups",
        size: "9 cm",
        price: 3.99,
        image: image6,
        alt_text: "cup",
    },
    {
        id: 7,
        name: "Cup \"Precious Moments\"",
        category: "Cups",
        size: "9 cm",
        price: 3.99,
        image: image7,
        alt_text: "cup",
    },
    {
        id: 8,
        name: "Cup \"Café Au Lait\"",
        category: "Cups",
        size: "9 cm",
        price: 3.99,
        image: image8,
        alt_text: "cup",
    },
    {
        id: 9,
        name: "Cup \"Classic Elegance\"",
        category: "Cups",
        size: "9 cm",
        price: 3.99,
        image: image9,
        alt_text: "cup",
    },
    {
        id: 10,
        name: "Cup \"Pure White\"",
        category: "Cups",
        size: "9 cm",
        price: 3.99,
        image: image10,
        alt_text: "cup",
    },
    {
        id: 11,
        name: "Cup \"Fishy White\"",
        category: "Cups",
        size: "9 cm",
        price: 3.99,
        image: image11,
        alt_text: "cup",
    },
    {
        id: 12,
        name: "Cup \"Deep Night\"",
        category: "Cups",
        size: "9 cm",
        price: 3.99,
        image: image12,
        alt_text: "cup",
    },
    {
        id: 13,
        name: "Bowl \"Brown Rice\"",
        category: "Bowls",
        size: "9 cm",
        price: 3.99,
        image: image13,
        alt_text: "bowl",
    },
    {
        id: 15,
        name: "Cup \"Sunset\"",
        category: "Cups",
        size: "9 cm",
        price: 3.99,
        image: image15,
        alt_text: "cup",
    },
    {
        id: 18,
        name: "Cup \"Extravaganza\"",
        category: "Cups",
        size: "9 cm",
        price: 3.99,
        image: image18,
        alt_text: "cup",
    },
    {
        id: 20,
        name: "Mug \"The Little Things\"",
        category: "Mugs",
        size: "9 cm",
        price: 3.99,
        image: image20,
        alt_text: "mug",
    },
    {
        id: 21,
        name: "Mug \"My Happy Place\"",
        category: "Mugs",
        size: "9 cm",
        price: 3.99,
        image: image21,
        alt_text: "mug",
    },
    {
        id: 22,
        name: "Mug \"Copper Trooper\"",
        category: "Mugs",
        size: "9cm",
        price: 3.99,
        image: image22,
        alt_text: "mug",
    },
    {
        id: 23,
        name: "Mug \"Christmas Tree\"",
        category: "Mugs",
        size: "9 cm",
        price: 3.99,
        image: image23,
        alt_text: "mug",
    },
    {
        id: 24,
        name: "Mug \"Pistachio\"",
        category: "Mugs",
        size: "9 cm",
        price: 3.99,
        image: image24,
        alt_text: "mug",
    },
    {
        id: 25,
        name: "Mug \"Winter Time\"",
        category: "Mugs",
        size: "9 cm",
        price: 3.99,
        image: image25,
        alt_text: "mug",
    },
    {
        id: 27,
        name: "Mug \"Big Size\"",
        category: "Mugs",
        size: "9 cm",
        price: 3.99,
        image: image27,
        alt_text: "mug",
    },
    {
        id: 28,
        name: "Mug \"Shades Of Gray\"",
        category: "Mugs",
        size: "9 cm",
        price: 3.99,
        image: image28,
        alt_text: "mug",
    },
    {
        id: 29,
        name: "Mug \"Taste Of Freedom\"",
        category: "Mugs",
        size: "9 cm",
        price: 3.99,
        image: image29,
        alt_text: "mug",
    },
    {
        id: 30,
        name: "Plate \"Yin\"",
        category: "Plates",
        size: "9 cm",
        price: 3.99,
        image: image30,
        alt_text: "plate",
    },
    {
        id: 31,
        name: "Plate \"Yang\"",
        category: "Plates",
        size: "9 cm",
        price: 3.99,
        image: image31,
        alt_text: "plate",
    },
    {
        id: 34,
        name: "Plate \"Black Metal\"",
        category: "Plates",
        size: "9 cm",
        price: 3.99,
        image: image34,
        alt_text: "plate",
    },
    {
        id: 37,
        name: "Plate \"Taintless\"",
        category: "Plates",
        size: "9 cm",
        price: 3.99,
        image: image37,
        alt_text: "plate",
    },
    {
        id: 38,
        name: "Plate \"Black Bamboo\"",
        category: "Plates",
        size: "9 cm",
        price: 3.99,
        image: image38,
        alt_text: "plate",
    },
    {
        id: 42,
        name: "Tea Pot \"Flower Power\"",
        category: "Tea Pots",
        size: "9 cm",
        price: 3.99,
        image: image42,
        alt_text: "Tea Pot",
    },
    {
        id: 43,
        name: "Tea Pot \"Spring Time\"",
        category: "Tea Pots",
        size: "9 cm",
        price: 3.99,
        image: image43,
        alt_text: "Tea Pot",
    },
    {
        id: 44,
        name: "Tea Pot \"Dark Ink\"",
        category: "Tea Pots",
        size: "9 cm",
        price: 3.99,
        image: image44,
        alt_text: "Tea Pot",
    },
    {
        id: 47,
        name: "Tea Pot \"China Memories\"",
        category: "Tea Pots",
        size: "9 cm",
        price: 3.99,
        image: image47,
        alt_text: "Tea Pot",
    },
    {
        id: 49,
        name: "Vase \"Crystal Power\"",
        category: "Vases",
        size: "9 cm",
        price: 3.99,
        image: image49,
        alt_text: "vase",
    },
    {
        id: 50,
        name: "Vase \"Green Energy\"",
        category: "Vases",
        size: "9 cm",
        price: 3.99,
        image: image50,
        alt_text: "vase",
    },
    {
        id: 51,
        name: "Vase \"Pink Charm\"",
        category: "Vases",
        size: "9 cm",
        price: 3.99,
        image: image51,
        alt_text: "vase",
    },
    {
        id: 52,
        name: "Vase \"Beige Felicity\"",
        category: "Vases",
        size: "9 cm",
        price: 3.99,
        image: image52,
        alt_text: "vase",
    },
    {
        id: 53,
        name: "Vase \"White Bliss\"",
        category: "Vases",
        size: "9 cm",
        price: 3.99,
        image: image53,
        alt_text: "vase",
    },
    {
        id: 55,
        name: "Vase \"Bamboo Boom\"",
        category: "Vases",
        size: "9 cm",
        price: 3.99,
        image: image55,
        alt_text: "vase",
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
                <form className="choose-quantity">
                    <label for="quantity">Choose quantity:</label>
                    <select id="quantity" name="quantity">
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                    </select>
                    <input type="button" className="add-to-cart" value="Add to cart"></input>
                </form>
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
                        <li><p>Show All</p></li>
                        <li><p>Mugs</p></li>
                        <li><p>Cups</p></li>
                        <li><p>Tea Pots</p></li>
                        <li><p>Plates</p></li>
                        <li><p>Bowls</p></li>
                        <li><p>Vases</p></li>
                    </ul>
                </header>
                <ul className="shop-products">{productItem}</ul>
                <div className="cart">
                <i class="fas fa-shopping-cart"></i>
                <div className="in_cart">
                    <div className="in_cart_products"></div>
                    <p>Total amount:</p>
                </div>
                <button className="send_order">Send order</button>
                </div>
            </div>
        </div>
    )

}



export default Shop;