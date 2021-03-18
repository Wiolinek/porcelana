import React, {useState} from 'react';

import '../../styles/sass/shop/shop-cart-modal.sass';


const ShopCartModal = ( {cartModalState, closeCartModalHandler, cartProductsList, setCartProductsList, totalAmount, amountToPay, setAmountToPay} ) => {

    const pickpoint = 0.00;
    const dhl_courier = 7.99;
    const dpd_courier = 4.99;
    const [deliveryOptionSelected, setDeliveryOptionSelected] = useState(0.00);

    const increaseQuantity = (e) => { //check which product has been clicked and change quantity + 1 in order and in cart
        if (e.currentTarget.previousSibling.dataset.quantity < 24) { //data-quantity from p element
            setCartProductsList(cartProductsList.map(item => item.id === e.target.id ? {...item, quantity: item.quantity * 1 + 1} : item)); 
        } else {
            setCartProductsList(cartProductsList.map(item => item.id === e.target.id ? {...item, quantity: item.quantity * 1} : item));
        }
    }

    const decreaseQuantity = (e) => { //check witch product has been clicked and change quantity - 1 in order and in cart
        setCartProductsList(cartProductsList.map(item => item.id === e.target.id ? {...item, quantity: item.quantity * 1 - 1} : item).filter(item => item.quantity !== 0));
    }

    const deleteProduct = (e) => { //check witch product has been clicked and delete it from order and cart
        setCartProductsList(cartProductsList.filter(item => item.id !== e.target.id && cartProductsList));
    }

    const chooseDeliveryOptionHandler = (e) => {
        setDeliveryOptionSelected(e.currentTarget.dataset.price * 1); //take price from clicked delivery option
    }

    setAmountToPay(totalAmount + deliveryOptionSelected);

    const orderList = cartProductsList.map(product => 
        <li key={product.id} product={product}>
            <p>{product.name}</p>
            <div className="buttons">
                <div className="change-quantity-container">
                    <button id={product.id} onClick={decreaseQuantity} className="change-quantity">-</button>
                    <p data-quantity={product.quantity}>{product.quantity}</p>
                    <button id={product.id} onClick={increaseQuantity} className="change-quantity">+</button>
                </div>
                <p>{product.price}</p>
                <p>{(product.price * product.quantity).toFixed(2)}</p>
                <button className="delete"><i id={product.id} onClick={deleteProduct} className="fas fa-trash-alt"></i></button>
            </div>
        </li>);


    return (
        <section className="cart-modal" style={{
            display: cartModalState ? 'block' : 'none',
            // transform: state ? 'translateY(0vh)' : 'translateY(-100vh)',
            }}>
            <button className="close-btn" onClick={closeCartModalHandler}>Close</button>
            <article className="order">
                <h2>Your order</h2>
                <ul className="order-list">{orderList}</ul>
                <p>Total amount: {totalAmount.toFixed(2)} EUR</p>
            </article>
            <article className="delivery">
                <h2>Delivery options</h2>
                <form className="delivery-options">
                    <label><input type="radio" name="delivery_option" value="dpd_courier" data-price={pickpoint} defaultChecked onClick={chooseDeliveryOptionHandler}/>Pickpoint: {pickpoint} EUR</label>
                    <label><input type="radio" name="delivery_option" value="dhl_courier" data-price={dhl_courier} onClick={chooseDeliveryOptionHandler}/>DHL Courier: {dhl_courier} EUR</label>
                    <label><input type="radio" name="delivery_option" value="pickpoint"  data-price={dpd_courier} onClick={chooseDeliveryOptionHandler}/>DPD Courier: {dpd_courier} EUR</label>
                </form>
                <p>To pay: {amountToPay.toFixed(2)} EUR</p>
            </article>
            <article className="address">
                <h2>Your address</h2>
                <div className="address-form">
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
            </article>  
        </section>
    )
}


export default ShopCartModal;