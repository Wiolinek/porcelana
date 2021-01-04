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

const productsData = [
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

const ShopProducts = () => {

    let productItem = productsData.map(product => (
        <li key={product.id} className="product">
            <div className="description">
                <p>{product.name}</p>
                <p>{product.size}</p>
                <p>{product.price} EUR</p>
                <img src={product.image} alt={product.alt_text}></img>
            </div>
            <div className="choose-quantity">
                <p>Choose quantity:</p>
                <label forHTML="quantity"><input type="number" id="quantity" className="pcs" placeholder="0" min="0" max="24" /*value={e.target.value}*/></input></label>
                <input type="button" className="add-to-cart" value="Add to cart" /*onClick={addToCartHandler}*/></input>
            </div>
        </li>
        )
    )

    return (
        <ul className="shop-products">
            {productItem}    
        </ul>
    )

}


export default ShopProducts;