import React from 'react';

import '../styles/sass/shop-cart-modal.sass';


const ShopCartModal = ( {cartModalState, closeCartModalHandler, cartProductsList, setCartProductsList, totalAmount} ) => {

    const increaseQuantity = (e) => { //check witch product has been clicked and change quantity + 1 in order and in cart
        // console.log(e.currentTarget.previousSibling.firstChild);
        
        // if (e.currentTarget.previousSibling.firstChild === '24') {
            // setCartProductsList(cartProductsList.map(item => item.id === e.target.id & e.t? {...item, quantity: item.quantity * 1 + 1} : item));

            // setCartProductsList(cartProductsList.map(item => item.id === e.target.id && item));
            // console.log("działa ale chujowo");
        // } else {
            setCartProductsList(cartProductsList.map(item => item.id === e.target.id ? {...item, quantity: item.quantity * 1 + 1} : item));
        // }
    }

    const decreaseQuantity = (e) => { //check witch product has been clicked and change quantity - 1 in order and in cart
        setCartProductsList(cartProductsList.map(item => item.id === e.target.id ? {...item, quantity: item.quantity * 1 - 1} : item).filter(item => item.quantity !== 0));
    }

    const deleteProduct = (e) => { //check witch product has been clicked and delete it from order and cart
        setCartProductsList(cartProductsList.filter(item => item.id !== e.target.id && cartProductsList));
    }

    let order = cartProductsList.map(product => 
        <li key={product.id} product={product}>
            <p>{product.name}</p>
            <button id={product.id} onClick={decreaseQuantity} className="change-quantity">-</button>
            <p>{product.quantity}</p>
            <button id={product.id} onClick={increaseQuantity} className="change-quantity">+</button>
            <p>{product.price}</p>
            <p>{(product.price * product.quantity).toFixed(2)}</p>
            <button className="delete"><i id={product.id} onClick={deleteProduct} className="fas fa-trash-alt"></i></button>
        </li>);
   
    return (
        <div className="cart-modal" style={{
            display: cartModalState ? 'block' : 'none',
            // transform: state ? 'translateY(0vh)' : 'translateY(-100vh)',
        }}>
            <button className="close-btn" onClick={closeCartModalHandler}>Close</button>
            <div>
                <h2>Your order</h2>
                <div className="products-list">{order}</div>
                <div>Total amount: {totalAmount.toFixed(2)}</div>
                <p>Delivery option:</p>
                <form>
                    <input type="radio" id="kurier" name="delivery_option" value="kurier"></input>
                    <label htmlFor="kurier">Kurier</label>
                    <input type="radio" id="poczta" name="delivery_option" value="poczta"></input>
                    <label htmlFor="poczta">Poczta</label>
                    <input type="radio" id="odbior_osobisty" name="delivery_option" value="odbior_osobisty"></input>
                    <label htmlFor="odbior_osobisty">Odbiór osobisty</label>
                </form>
                <div>To pay: {totalAmount.toFixed(2)}</div>
            </div>
            <h2>Your address</h2>
            <div className="order_form">
                <form>
                    <label htmlFor="user_name">Name:<br/></label>
                    <input type="text" id="user_name" name="user_name" required></input>
                    <label htmlFor="user_surname">Surname:<br/></label>
                    <input type="text" id="user_surname" name="user_surname" required></input>
                    <label htmlFor="user_email">E-mail:<br/></label>
                    <input type="email" id="user_email" name="user_email" required></input>
                    <label htmlFor="user_street_name">Street name and number:<br/></label>
                    <input type="text" id="user_street_name" name="user_email" required></input>
                    <label htmlFor="user_zipcode">Zip code:<br/></label>
                    <input type="number" id="user_zipcode" name="user_email" required></input>
                    <label htmlFor="user_city">City:<br/></label>
                    <input type="text" id="user_city" name="user_email" required></input>

                </form>
            </div>
            <button className="send-order">Send order</button>
        </div>
    )
}


export default ShopCartModal;