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
    }

    const closeShopFooterModalHandler = () => {
        setShopFooterModalState(false);
    }
    

    return (
        <>
            {shopFooterState && 
                <div className="shop-footer">
                    <div className="btn-container">
                        <NavLink to="/" exact target="_blank">About Us</NavLink>
                        <NavLink to="/" exact target="_blank">Contact Us</NavLink>
                    </div>
                    <div className="btn-container">
                        <NavLink to="/" exact target="_blank">About our products</NavLink>
                        <button shopFooterState={shopFooterState} shopFooterModalState={shopFooterModalState} value={shopFooterState[1].id} onClick={openShopFooterModalHandler}>{shopFooterState[1].name}</button>
                    </div>
                    <div className="btn-container">
                        <button shopFooterState={shopFooterState} shopFooterModalState={shopFooterModalState} value={shopFooterState[2].id} onClick={openShopFooterModalHandler}>{shopFooterState[2].name}</button>
                        <button shopFooterState={shopFooterState} shopFooterModalState={shopFooterModalState} value={shopFooterState[0].id} onClick={openShopFooterModalHandler}>{shopFooterState[0].name}</button>
                    </div>
                    { shopFooterModalState ? <div className="shop-footer-back" onClick={closeShopFooterModalHandler}></div> : null }
                    <ShopFooterModal shopFooterDetailClicked={shopFooterDetailClicked} shopFooterModalState={shopFooterModalState} closeShopFooterModalHandler={closeShopFooterModalHandler} shopFooterState={shopFooterState}/>
                </div>
            }
        </>
    )

}


export default ShopFooter;