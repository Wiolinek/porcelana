import React, { useEffect, useState } from 'react';

import { NavLink } from "react-router-dom";

import ShopFooterModal from './ShopFooterModal';

import '../../styles/sass/shop/shop-footer.sass';

import axios from "axios";


const ShopFooter = () => {

    const [shopFooterModalState, setShopFooterModalState] = useState(false);
    const [shopFooterState, setShopFooterState] = useState();
    const [shopFooterDetailClicked, setShopFooterDetailClicked] = useState();

    useEffect(() => {

        axios.get(`http://localhost:3030/shop_footer`)
            .then(response => {
            const shop_footer = response.data;
            setShopFooterState(shop_footer);
            })
    }, []);

    const openShopFooterModalHandler = (e) => {
        setShopFooterModalState(true);
        setShopFooterDetailClicked(parseInt(e.currentTarget.value));
        document.body.style.overflow = "hidden";
    }

    const closeShopFooterModalHandler = () => {
        setShopFooterModalState(false);
        document.body.style.overflow = "visible";
    }
    

    return (
        <>
            {shopFooterState && 
                <div className="shop-footer">
                    <NavLink to="/#about" exact target="_blank">About Us</NavLink>
                    <NavLink to="/#contact" exact target="_blank">Contact Us</NavLink>
                    <NavLink to="/#products" exact target="_blank">About our products</NavLink>
                    <button className="shop-footer-btn" value={shopFooterState[1].id} onClick={openShopFooterModalHandler}>{shopFooterState[1].name}</button>
                    <button className="shop-footer-btn" value={shopFooterState[2].id} onClick={openShopFooterModalHandler}>{shopFooterState[2].name}</button>
                    <button className="shop-footer-btn" value={shopFooterState[0].id} onClick={openShopFooterModalHandler}>{shopFooterState[0].name}</button>
                    { shopFooterModalState ? <div className="shop-footer-back" onClick={closeShopFooterModalHandler}></div> : null }
                    <ShopFooterModal shopFooterDetailClicked={shopFooterDetailClicked} shopFooterModalState={shopFooterModalState} closeShopFooterModalHandler={closeShopFooterModalHandler} shopFooterState={shopFooterState}/>
                </div>
            }
            <p className="copyrights">Copyright &copy; 2021 Wiola Polok www.u-v.codes. All Rights Reserved</p>
        </>
    )
}


export default ShopFooter;