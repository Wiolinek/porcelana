import React, { useState } from 'react';

import { NavLink } from "react-router-dom";

import ShopFooterModal from './ShopFooterModal';

import '../../styles/sass/shop/shop-footer.sass';


const ShopFooter = () => {

    const [shopFooterModalState, setShopFooterModalState] = useState(false);

    const openShopFooterModalHandler = () => {
        setShopFooterModalState(true);
    }

    const closeShopFooterModalHandler = () => {
        setShopFooterModalState(false);
    }

    return (
        <div className="shop-footer">
            <div className="btn-container">
                <NavLink to="/" exact target="_blank">About Us</NavLink>
                <NavLink to="/" exact target="_blank">Contact Us</NavLink>
            </div>
            <div className="btn-container">
                <NavLink to="/" exact target="_blank">About our products</NavLink>
                <button shopFooterModalState={shopFooterModalState} onClick={openShopFooterModalHandler}>Terms Of Use</button>
            </div>
            <div className="btn-container">
                <button shopFooterModalState={shopFooterModalState} onClick={openShopFooterModalHandler}>Shipping</button>
                <button shopFooterModalState={shopFooterModalState} onClick={openShopFooterModalHandler}>Returns & Exchanges</button>
            </div>
            { shopFooterModalState ? <div className="shop-footer-back" onClick={closeShopFooterModalHandler}></div> : null }
            <ShopFooterModal shopFooterModalState={shopFooterModalState} closeShopFooterModalHandler={closeShopFooterModalHandler}/>
        </div>
    )

}


export default ShopFooter;