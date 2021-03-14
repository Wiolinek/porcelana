import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { NavLink } from "react-router-dom";

import '../../styles/sass/main/menu-modal.sass';

const MenuModal = () => {

    const [navMenuState, setNavMenuState] = useState(false);

    const showMenuHandler = () => {
        setNavMenuState(true)
    }

    const closeMenuHandler = () => {
        setNavMenuState(false)
    }
    
    return (
        <>
        {/* { navMenuState ? */}
            <nav className="nav-menu" style={{
                clipPath: navMenuState ? 'circle(100%)' : 'circle(3% at 96vw 11vh)'
            }}>
                <div className="menu-logo-container">
                    <div className="logo-border">
                        <p className="logo-name">ICM Inc.</p>
                    </div>
                </div>
                <div className="navigation-menu-container">
                    <ul className="navigation-menu">
                        <li>{navMenuState ? <i className="fas fa-times" onClick={closeMenuHandler}></i> : <i className="fas fa-bars" navMenuState={navMenuState} onClick={showMenuHandler}></i>}</li>
                        <li><Link to="navigation" onClick={closeMenuHandler} smooth={true}>Home</Link></li>
                        <li><Link to="about"onClick={closeMenuHandler} smooth={true}>About Us</Link></li>
                        <li><Link to="products" onClick={closeMenuHandler} smooth={true}>Products</Link></li>
                        <li><Link to="recommendations" onClick={closeMenuHandler} smooth={true}>Recommendations</Link></li>
                        <li><Link to="career" onClick={closeMenuHandler} smooth={true}>Career</Link></li>
                        <li><Link to="contact" onClick={closeMenuHandler} smooth={true}>Contact</Link></li>
                        <li><NavLink to="/shop/all" target="_blank" onClick={closeMenuHandler}>E-Shop</NavLink></li>
                    </ul>
                </div>
            </nav>
             {/* : null }  */}
        </>
    )
}

export default MenuModal;