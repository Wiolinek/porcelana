import React from 'react';

import '../styles/sass/shop-menu.sass';


const ShopMenu = (props) => {

    const shopMenuOptions = ["All", "Mugs", "Cups", "Tea Pots", "Plates", "Bowls", "Vases"];
    const shopMenu = shopMenuOptions.map(item =>
        <li><button className="shop-menu-btn" key={item} onClick={props.productsFilterHandler} value={item}>{item}</button></li>)


    return (
        <>
            <div className="advantages">
                <div><i className="fas fa-shipping-fast"></i><p>Free shipping</p></div>
                <div><i className="fas fa-undo-alt"></i><p>Easy returns</p></div>
                <div><i className="fas fa-medal"></i><p>3 years warranty</p></div>
                <div><i className="fas fa-thumbs-up"></i><p>Satisfaction guarantee</p></div>
            </div>
            <div className="search-and-logo">
                <div className="logo-border">
                    <p className="logo-name">ICM Inc.</p>
                </div>
                <div className="search">
                    <label htmlFor="search">what are you looking for..?</label>
                    <input type="text" id="search" name="search" onChange={props.searchProductHandler} value={props.searchText}></input>
                    <i className="fas fa-search"></i>
                </div>
            </div>
            <div className="shop-menu">
                <ul>
                {shopMenu}
                </ul>
            </div>
        </>
    )
}


export default ShopMenu;