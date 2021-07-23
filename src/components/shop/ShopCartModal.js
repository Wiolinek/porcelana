/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useEffect, useState } from 'react';

import dayjs from 'dayjs';

import '../../styles/sass/shop/shop-cart-modal.sass';

import axios from "axios";


const ShopCartModal = ( {cartModalState, closeCartModalHandler, cartProductsList, setCartProductsList, totalAmount, amountToPay, setAmountToPay} ) => {

    const [deliveryOptions, setDeliveryOptions] = useState([]);
    const [deliveryOptionSelectedPrice, setDeliveryOptionSelectedPrice] = useState(0.00);
    const [estimatedDeliveryDate, setEstimatedDeliveryDate] = useState();
    const defaultDeliveryOptionChecked = 4;

    useEffect(() => {
        axios.get(`http://localhost:3030/delivery_options`)
        .then(response => {
        let delivery_options = response.data;
        setDeliveryOptions(delivery_options);
        })
    }, []);

    useEffect(() => {
        calculateDeliveryDate(defaultDeliveryOptionChecked);
    }, []);


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

    const calculateDeliveryDate = (time) => {
        let newDate = addDaysNotWeekends(time);
        setEstimatedDeliveryDate(newDate.format('dddd, MMMM D'));
    }

    const chooseDeliveryOptionHandler = (e) => {
        setDeliveryOptionSelectedPrice(e.currentTarget.dataset.price * 1); //take price from clicked delivery option
        calculateDeliveryDate(e.currentTarget.dataset.time * 1);
    }

    setAmountToPay(totalAmount + deliveryOptionSelectedPrice);

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

    const deliveryOptionsList = deliveryOptions.map(option => (
        <li>
            <label key={option.id}><input type="radio" name="delivery_option" value={option.option} data-price={option.price} data-time={option.time} defaultChecked onClick={chooseDeliveryOptionHandler}/>{option.name}: {option.price} EUR</label>
            <p>Delivery up to: {option.time} days</p>
        </li>
    ))

    const addDaysNotWeekends = (daysPlus) => {

        if(!daysPlus) {
            daysPlus = 4;
        }

        let currentDate = dayjs();
        let deliveryDate = currentDate;

        for(let i = 0; i < daysPlus; i++) {

            if(parseInt(deliveryDate.format('d')) === 6 || parseInt(deliveryDate.format('d')) === 7) {
                daysPlus++;
                deliveryDate = deliveryDate.add(1, 'day');
            } else {
                deliveryDate = deliveryDate.add(1, 'day');
            }
        }

        if(parseInt(deliveryDate.format('d')) === 6) {
            deliveryDate = deliveryDate.add(2, 'day');
        } else if(parseInt(deliveryDate.format('d')) === 7) {
            deliveryDate = deliveryDate.add(1, 'day');
        }

        return deliveryDate;
    };

    
    return (
        <section className="cart-modal" style={{
            transform: cartModalState ? 'translateY(0vh)' : 'translateY(-100vh)',
            opacity: cartModalState ? '1' : '.5',
            }}>
            <button className="close-btn" onClick={closeCartModalHandler}>Close</button>
            <article className="order">
                <h2>Your order</h2>
                <div className="order-menu">
                    <p>Product</p>
                    <div className="buttons">
                        <p>Quantity</p>
                        <p>Price</p>
                        <p>Subtotal</p>
                        <p className="delete"></p>
                    </div>
                </div>
                {orderList.length > 0 ? <ul className="order-list">{orderList}</ul> : <p className="empty-cart">There's nothing here yet..</p>}
                <p className="total-price">Total: {totalAmount.toFixed(2)} EUR</p>
            </article>
            <article className="delivery">
                <h2>Delivery options</h2>
                <form className="delivery-options">
                    <ul>
                        {deliveryOptionsList}
                    </ul>
                </form>
                <div>
                    <p className="estimated-delivery-date"><span>Estimated delivery date: </span><span>{estimatedDeliveryDate}</span></p>
                    <p className="total-price">To pay: {amountToPay.toFixed(2)} EUR</p>
                </div>
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