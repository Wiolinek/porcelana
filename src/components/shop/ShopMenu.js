import React from 'react';

import { NavLink } from "react-router-dom";

import '../../styles/sass/shop/shop-menu.sass';


const ShopMenu = (props) => {

    const {shopMenuOptions, filterProductHandler, searchProductHandler, searchText, optionSelected } = props;

    const shopMenu = shopMenuOptions.map(option =>
        <NavLink key={option.id} to={ `/shop/${option.link}` } className={optionSelected * 1 === option.id ? "active" : "not-active"}><button className="shop-menu-btn" onClick={filterProductHandler} value={option.id}>{option.name}</button></NavLink>)

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
                    <NavLink to="/" exact target="_blank">
                        <p className="logo-name">ICM Inc.</p>
                    </NavLink>
                </div>
                <div className="search">
                    <label htmlFor="search">what are you looking for..?</label>
                    <input type="text" id="search" name="search" onChange={searchProductHandler} value={searchText}></input>
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