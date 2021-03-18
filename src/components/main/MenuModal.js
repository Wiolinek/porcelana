import React, { useEffect, useState } from 'react';
// import { Link } from 'react-scroll';
import { Link, NavLink } from "react-router-dom";

import '../../styles/sass/main/menu-modal.sass';

import axios from "axios";

const MenuModal = () => {

    const [navMenuState, setNavMenuState] = useState(false);
    const [mainMenuOptionsState, setMainMenuOptionsState] = useState([]);

    useEffect(() => {
        
        axios.get(`http://localhost:3030/main_menu`)
            .then(response => {
            const menu = response.data;
            setMainMenuOptionsState(menu);
            })
    }, []);

    const showMenuHandler = () => {
        setNavMenuState(true)
    }

    const closeMenuHandler = () => {
        setNavMenuState(false)
    }

    console.log(mainMenuOptionsState)

    const mainMenu = mainMenuOptionsState.map(option =>
        <li><Link key={option.id} to={ `/main/${option.link}` } onClick={closeMenuHandler} smooth={true}>{option.name}</Link></li>);

    
    return (
        <>
        {/* { navMenuState ? */}
            <button className="show-menu"><i className="fas fa-bars" navMenuState={navMenuState} onClick={showMenuHandler}></i></button>
            <nav className="nav-menu" style={{
                clipPath: navMenuState ? 'circle(100%)' : 'circle(0% at 100vw 0vh)'
            }}>
                <div className="menu-logo-container">
                    <div className="logo-border">
                        <p className="logo-name">ICM Inc.</p>
                    </div>
                </div>
                <div className="navigation-menu-container">
                    <i className="fas fa-times" onClick={closeMenuHandler}></i>
                    <ul className="navigation-menu">
                        
                        {/* <li><Link to="home" onClick={closeMenuHandler} smooth={true}>Home</Link></li>
                        <li><Link to="about"onClick={closeMenuHandler} smooth={true}>About Us</Link></li>
                        <li><Link to="products" onClick={closeMenuHandler} smooth={true}>Products</Link></li>
                        <li><Link to="recommendations" onClick={closeMenuHandler} smooth={true}>Recommendations</Link></li>
                        <li><Link to="career" onClick={closeMenuHandler} smooth={true}>Career</Link></li>
                        <li><Link to="contact" onClick={closeMenuHandler} smooth={true}>Contact</Link></li>
                        <li><NavLink to="/shop/all" target="_blank" onClick={closeMenuHandler}>E-Shop</NavLink></li>

                        <li><NavLink to={ `/main/${option.link}` } onClick={closeMenuHandler} smooth={true}>Home</NavLink></li>
                        <li><NavLink to={ `/main/${option.link}` } onClick={closeMenuHandler} smooth={true}>About Us</NavLink></li>
                        <li><NavLink to={ `/main/${option.link}` } onClick={closeMenuHandler} smooth={true}>Products</NavLink></li>
                        <li><NavLink to={ `/main/${option.link}` } onClick={closeMenuHandler} smooth={true}>Recommendations</NavLink></li>
                        <li><NavLink to={ `/main/${option.link}` } onClick={closeMenuHandler} smooth={true}>Career</NavLink></li>
                        <li><NavLink to={ `/main/${option.link}` } onClick={closeMenuHandler} smooth={true}>Contact</NavLink></li>
                        <li><NavLink to={ `/main/${option.link}` } target="_blank" onClick={closeMenuHandler}>E-Shop</NavLink></li> */}
                        {/* { navMenuState ? */}
                        {mainMenu}
                        <li><NavLink to="/shop/all" target="_blank" onClick={closeMenuHandler}>E-Shop</NavLink></li>
                    </ul>
                </div>
            </nav>
             {/* : null }  */}
        </>
    )
}

export default MenuModal;