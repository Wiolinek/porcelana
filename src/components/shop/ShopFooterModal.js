import React from 'react';

import '../../styles/sass/shop/shop-footer-modal.sass';


const ShopFooterModal = ( {shopFooterModalState, closeShopFooterModalHandler} ) => {
   
    return (
        <div className="shop-footer-modal-wrapper" style={{
            display: shopFooterModalState ? 'block' : 'none',
            // transform: state ? 'translateY(0vh)' : 'translateY(-100vh)',
            }}>
            <button className="close-btn" onClick={closeShopFooterModalHandler}>Close</button>
            <div>
                <h2>Tutaj będzie tekst</h2>
            </div>
        </div>
    )
}


export default ShopFooterModal;