import React from 'react';
import ShopProducts from "./ShopProducts";
import ShopMenu from "./ShopMenu";
import ShopCart from "./ShopCart";

import '../styles/sass/shop.sass';


function Shop() {

    return (
        <div>
            <div className="shop" id="shop">
                <ShopMenu />
                <ShopProducts />
                <ShopCart />
            </div>
        </div>
    );

}



export default Shop;