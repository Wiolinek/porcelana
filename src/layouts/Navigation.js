import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll'

import '../styles/Navigation.css';

const Navigation = () => {

    const scrollToBottom = () => {
        scroll.scrollToBottom();
    };

    return (
    <nav className="nav">
        <div className="logo menu-logo">
            <p className="logo-name">ICM Inc.</p>
        </div>
        <ul className="navigation-bar">
            <li><Link to="about" smooth={true}>About Us</Link></li>
            <li><Link to="products" smooth={true}>Products</Link></li>
            <li><Link to="recommendations" smooth={true}>Recommendations</Link></li>
            <li><Link to="career" smooth={true}>Career</Link></li>
            <li><Link to="contact" smooth={true}>Contact</Link></li>
            <li><Link to="shop" target="_blank">E-Shop</Link></li>
        </ul>
        <aside>
            <li><i class="fab fa-facebook"></i></li>
            <li><i class="fab fa-instagram"></i></li>
            <li><i class="fab fa-twitter-square"></i></li>
            <li><i class="fab fa-facebook-messenger"></i></li>
            <li onClick={scrollToBottom}><i class="fas fa-envelope"></i></li>
        </aside>
    </nav>
    )
}   


export default Navigation;