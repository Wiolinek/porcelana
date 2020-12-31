import React from 'react';

import '../styles/Navigation.css';

const Navigation = () => {

    return (
    <nav className="nav">
        <div className="logo menu-logo">
            <p className="logo-name">ICM Inc.</p>
        </div>
        <ul className="navigation-bar">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Recommendations</a></li>
            <li><a href="#">Career</a></li>
            <li><a href="#">E-Shop</a></li>
        </ul>
        <aside>
            <div><i class="fab fa-facebook"></i></div>
            <div><i class="fab fa-instagram"></i></div>
            <div><i class="fab fa-twitter-square"></i></div>
            <div><i class="fab fa-facebook-messenger"></i></div>
            <div><i class="fas fa-envelope"></i></div>
        </aside>
    </nav>
    )
}   


export default Navigation;