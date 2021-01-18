import React from 'react';

import '../styles/sass/shop-cart.sass';


const ShopCart = () => {

    // let cartProductList = [];
    // addToCartHandler = (e) => {
    //     if (e.target.value > 0) {
    //         cartProductList.push(
    //             {
    //                productName: productsData.name,
    //                productQuantity: e.target.value,
    //                productPrice: productsData.price,
    //             },
    //         )
    //     }
    // }
   
    return (
        <div className="cart">
                <i class="fas fa-shopping-cart"></i>
                <div className="in_cart">
                    {/* {cartProductList} */}
                    <div className="in_cart_products"></div>
                    <p>Total amount: EUR</p>
                </div>
                <button className="send_order">Send order</button>
                </div>
    )
}


export default ShopCart;