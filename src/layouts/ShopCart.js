import React from 'react';

import '../styles/sass/shop-cart.sass';


const ShopCart = ({ cartProductsList }) => {

    let listToDisplay = cartProductsList.map(product => (
        <li key={product.id}><p>{product.name}</p><p>{product.quantity} pcs</p><p>{product.price} EUR</p></li>));

    console.log(listToDisplay);
   
    return (
        <div className="cart">
                <i class="fas fa-shopping-cart"><p>{!cartProductsList.length ? null : cartProductsList.length}</p></i>
                <div className="in_cart">
                    <div className="in_cart_products">
                        <div>{!listToDisplay.length ? <p>Nothing's here.. :(</p> : null}</div>
                        {listToDisplay}
                    </div>
                    <p>Total amount: EUR</p>
                </div>
                <button className="send_order">Send order</button>
                </div>
    )
}


export default ShopCart;