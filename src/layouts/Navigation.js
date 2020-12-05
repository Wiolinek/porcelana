import React from 'react';

import '../styles/Navigation.css';

const Navigation = () => {

    return (
    <nav className="nav">
        <div className="logo">
            <p className="name">ICM Inc.</p>
        </div>
        <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Recommendations</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">E-Shop</a></li>
        </ul>
        <aside>
            <div className="contact_bar"><i class="fab fa-facebook"></i></div>
            <div className="contact_bar"><i class="fab fa-instagram"></i></div>
            <div className="contact_bar"><i class="fab fa-twitter-square"></i></div>
            <div className="contact_bar post msg"><i class="fab fa-facebook-messenger"></i></div>
            <div className="contact_bar post"><i class="fas fa-envelope"></i></div>
        </aside>
    </nav>
    )
}   


export default Navigation;