import React, { useEffect, useState } from 'react';

import { NavLink, Link, useParams } from "react-router-dom";

import '../../styles/sass/shop/shop-menu.sass';

import axios from "axios";


const ShopMenu = (props) => {

    const [menuOptions, setShopMenuOptions] = useState([]);
    const { categoryLink } = useParams();

    useEffect(() => {

        axios.get(`http://localhost:3030/categories`)
            .then(response => {
            const categories = response.data;
            setShopMenuOptions(categories);
            })
    }, []);

    const {filterProductHandler, searchProductHandler, searchText } = props;

    const shopMenu = menuOptions.map(item =>
        <Link to={ `/shop/${item.link}` } className={categoryLink === item.link ? "active" : "not-active"}><button className="shop-menu-btn" key={item.id} onClick={filterProductHandler} value={item.name}>{item.name}</button></Link>)

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