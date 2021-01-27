import React from 'react';

import '../styles/sass/shop-cart.sass';


const ShopCart = (props) => {

    let cartProductsList = props.cartProductsList;

    let listToDisplay = cartProductsList.map(product => <li><p>{product.name}</p><p> pcs</p><p>{product.price} EUR</p></li>);
    console.log(listToDisplay);
   
    return (
        <div className="cart">
                <i class="fas fa-shopping-cart"></i>
                <div className="in_cart">
                    <div className="in_cart_products">
                        {listToDisplay}
                    </div>
                    <p>Total amount: EUR</p>
                </div>
                <button className="send_order">Send order</button>
                </div>
    )
}


export default ShopCart;