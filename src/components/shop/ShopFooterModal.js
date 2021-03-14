import React, { useEffect, useState } from 'react';

import '../../styles/sass/shop/shop-footer-modal.sass';

import axios from "axios";


const ShopFooterModal = ( {shopFooterModalState, closeShopFooterModalHandler} ) => {

    const [shopFooterState, setShopFooterState] = useState(false);

    useEffect(() => {

        axios.get(`http://localhost:3030/shop_footer`)
            .then(response => {
            const shop_footer = response.data;
            setShopFooterState(shop_footer);
            })
    }, []);

    console.log(shopFooterState)
   
    return (
        <div className="shop-footer-modal-wrapper" style={{
            display: shopFooterModalState ? 'block' : 'none',
            // transform: state ? 'translateY(0vh)' : 'translateY(-100vh)',
            }}>
            <button className="close-btn" onClick={closeShopFooterModalHandler}>Close</button>
            <div>
                <h2>{shopFooterState.returns_exchanges}</h2>  
            </div>
        </div>
    )
}


export default ShopFooterModal;