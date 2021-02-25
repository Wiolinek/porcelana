import React from 'react';
import { Link } from 'react-scroll'

import '../styles/sass/menu-modal.sass';

const MenuModal = ( {navMenuState, closeMenuHandler}) => {
    
    return (
        <>,
        { navMenuState ?
            <nav className="nav-menu">
                <div className="menu-logo-container">
                    <div className="logo-border">
                        <p className="logo-name">ICM Inc.</p>
                    </div>
                </div>
                <div className="navigation-menu-container">
                    <ul className="navigation-menu">
                        <li><i className="fas fa-times" onClick={closeMenuHandler}></i></li>
                        <li><Link to="navigation" onClick={closeMenuHandler} smooth={true}>Home</Link></li>
                        <li><Link to="about"onClick={closeMenuHandler} smooth={true}>About Us</Link></li>
                        <li><Link to="products" onClick={closeMenuHandler} smooth={true}>Products</Link></li>
                        <li><Link to="recommendations" onClick={closeMenuHandler} smooth={true}>Recommendations</Link></li>
                        <li><Link to="career" onClick={closeMenuHandler} smooth={true}>Career</Link></li>
                        <li><Link to="contact" onClick={closeMenuHandler} smooth={true}>Contact</Link></li>
                        <li><Link to="shop" onClick={closeMenuHandler} target="_blank">E-Shop</Link></li>
                    </ul>
                </div>
            </nav> : null } 
        </>
    )
}

export default MenuModal;