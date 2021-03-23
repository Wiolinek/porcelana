import React from 'react';

import '../../styles/sass/shop/shop-footer-modal.sass';


const ShopFooterModal = ( {shopFooterModalState, closeShopFooterModalHandler, shopFooterState, shopFooterDetailClicked} ) => {


    let detailToDisplay = shopFooterState.map(option => option.id === shopFooterDetailClicked ? 
        <div>
            <h2>{option.name}</h2>
            <p>{option.text}</p>
        </div> : null
    )

    
    return (
        <div className="shop-footer-modal-wrapper" style={{
            transform: shopFooterModalState ? 'translateY(0vh)' : 'translateY(-100vh)',
            opacity: shopFooterModalState ? '1' : '.5',
            }}>
            <div>
                <button className="close-btn" onClick={closeShopFooterModalHandler}>Close</button>
            </div>
            {detailToDisplay}
        </div> 
    )
}


export default ShopFooterModal;