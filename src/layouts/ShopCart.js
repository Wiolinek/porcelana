import React, { useState, useEffect } from 'react';

import '../styles/sass/shop-cart.sass';


const ShopCart = ({ cartProductsList, productsData }) => {

    let [totalAmount, setTotalAmount] = useState(0);

    let listToDisplay = cartProductsList.map(product => (
        <li key={product.id}><p>{product.name}</p><p>{product.quantity} x</p><p>{product.price}</p></li>));

    console.log(listToDisplay);

    // totalAmount ma przechowywać wartości dla poszczególnych pozycji w koszyku oraz te wartości sumować za pomocą funkcji reduce

    useEffect(() => { //when cartProductList changes - update totalAmount in cart
        setTotalAmount();
        console.log('zmiana w wartości koszyka');
    }, [cartProductsList])


    listToDisplay.map(product => product.id === productsData.id ? 6 : 0)
   
    return (
        <div className="cart">
            <p>{cartProductsList.length && cartProductsList.length}</p>
                <i class="fas fa-shopping-cart"></i>
                <div className="in_cart">
                    <div className="in_cart_products">
                        <div>{!listToDisplay.length && <p>Nothing's here.. :(</p>}</div>
                        {listToDisplay}
                    </div>
                    <p>Total amount: {totalAmount} EUR</p>
                </div>
                <button className="send_order">Send order</button>
                </div>
    )
}


export default ShopCart;