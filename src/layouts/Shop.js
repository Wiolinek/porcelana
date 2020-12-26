import React from 'react';
import ShopProducts from "./ShopProducts";
import ShopMenu from "./ShopMenu";
import ShopCart from "./ShopCart";

import '../styles/Shop.css';


const Shop = () => {



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
                    <ShopMenu />
                </header>
                <ShopProducts />
                <ShopCart />
            </div>
        </div>
    )

}



export default Shop;