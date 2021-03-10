import React, { useState } from 'react';

import ShopFooterModal from './ShopFooterModal';

import '../../styles/sass/shop/shop-footer.sass';


const ShopFooter = () => {

    const [shopFooterModalState, setShopFooterModalState ] = useState(false)

    const openShopFooterModalHandler = () => {
        setShopFooterModalState(true);
    }

    const closeShopFooterModalHandler = () => {
        setShopFooterModalState(false);
    }

    return (
        <div className="shop-footer">
            <div className="btn-container">
                <button shopFooterModalState={shopFooterModalState} onClick={openShopFooterModalHandler}>About Us</button>
                <button shopFooterModalState={shopFooterModalState} onClick={openShopFooterModalHandler}>Contact Us</button>
            </div>
            <div className="btn-container">
                <button shopFooterModalState={shopFooterModalState} onClick={openShopFooterModalHandler}>About our products</button>
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