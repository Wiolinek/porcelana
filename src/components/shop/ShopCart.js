import React, { useState, useEffect } from 'react';

import ShopCartModal from './ShopCartModal';

import '../../styles/sass/shop/shop-cart.sass';


const ShopCart = ({ cartProductsList, setCartProductsList }) => {

    const [totalAmount, setTotalAmount] = useState(0);
    const [amountToPay, setAmountToPay] = useState(0);
    const [cartModalState, setCartModalState] = useState(false);

    const listToDisplay = cartProductsList.map(product => 
        <li key={product.id}><p>{product.name}</p><p>x {product.quantity}</p><p>{(product.price * product.quantity).toFixed(2)}</p></li>);
    // totalAmount ma przechowywać wartości dla poszczególnych pozycji w koszyku oraz te wartości sumować za pomocą funkcji reduce

    useEffect(() => { // when cartProductList changes - update totalAmount in cart
        let totalAmount = cartProductsList.map(product => ((product.price * product.quantity).toFixed(2) * 1)); // for each product in cart multiply price and quantity
        setTotalAmount(totalAmount.reduce((initValue, currentValue) => {return initValue + currentValue}, 0)); // add all prices from totalAmount array
    }, [cartProductsList]);

    const openCartModalHandler = () => {
        setCartModalState(true);
    }

    const closeCartModalHandler = () => {
        setCartModalState(false);
    }

    return (
        <>
            <p>{cartProductsList.length && cartProductsList.length}</p>
            <i className="fas fa-shopping-cart"></i>
            <div className="in_cart">
                <div className="in_cart_products">
                    {!listToDisplay.length && <p>There's nothing here yet..</p>}
                    <ul>{listToDisplay}</ul>
                </div>
                <p>Total amount: {totalAmount.toFixed(2)} EUR</p>
            </div>
            <button className="go-to-cart" onClick={openCartModalHandler}>Go to Cart</button>
            { cartModalState ? <div className="shop-cart-back" onClick={closeCartModalHandler}></div> : null }
            <ShopCartModal cartProductsList={cartProductsList} setCartProductsList={setCartProductsList} cartModalState={cartModalState} closeCartModalHandler={closeCartModalHandler} totalAmount={totalAmount} amountToPay={amountToPay} setAmountToPay={setAmountToPay}/>
        </>
    )
}


export default ShopCart;