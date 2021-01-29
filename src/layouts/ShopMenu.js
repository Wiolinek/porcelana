import React from 'react';

import '../styles/sass/shop-menu.sass';


const ShopMenu = (props) => {

    const shopMenuOptions = ["All", "Mugs", "Cups", "Tea Pots", "Plates", "Bowls", "Vases"];
    const shopMenu = shopMenuOptions.map(item =>
        <button key={item} onClick={props.productsFilterHandler} value={item}>{item}</button>)


    return (
        <header className="shop-header">
            <div className="advantages">
                <div><i className="fas fa-shipping-fast"></i><p>Free shipping</p></div>
                <div><i className="fas fa-undo-alt"></i><p>Easy returns</p></div>
                <div><i className="fas fa-medal"></i><p>3 years warranty</p></div>
                <div><i className="fas fa-thumbs-up"></i><p>Satisfaction guarantee</p></div>
            </div>
            <div className="search">
                <label htmlFor="search">what are you looking for..?</label>
                <input type="text" id="search" name="search" onChange={props.searchProductHandler} value={props.searchText}></input>
                <i className="fas fa-search"></i>
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