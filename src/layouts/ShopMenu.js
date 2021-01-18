import React from 'react';

import '../styles/sass/shop-menu.sass';


const ShopMenu = () => {

    let shopMenuOptions = ["Show All", "Mugs", "Cups", "Tea Pots", "Plates", "Bowls", "Vases"];
    let shopMenu = shopMenuOptions.map(item =>
        <li key={item}><p>{item}</p></li>
    )

    return (
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
                {shopMenu}
            </ul>
        </header>
    )
}


export default ShopMenu;