import React, { useEffect, useState } from 'react';
import { scroller } from 'react-scroll'
import { Link, NavLink } from "react-router-dom";

import '../../styles/sass/main/menu-modal.sass';

import axios from "axios";


const MenuModal = ( {closeMenuHandler, navMenuState} ) => {

    const [mainMenuOptionsState, setMainMenuOptionsState] = useState([]);

    useEffect(() => {
        
        axios.get(`http://localhost:3030/main_menu`)
            .then(response => {
            const menu = response.data;
            setMainMenuOptionsState(menu);
            })
    }, []);

    const scrollToSection = (link) => scroller.scrollTo(link, {
        delay: 1000,
        smooth: 'linear',
        hashSpy: 'true',
      });

    const mainMenu = mainMenuOptionsState.map(option =>
        <li key={option.id} onClick={closeMenuHandler}><Link to={ `/#${option.link}` } onClick={() => scrollToSection(option.link)}>{option.name}</Link></li>);


    return (
        <>
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
                        {mainMenu}
                        <li><NavLink to="/shop/all" target="_blank" onClick={closeMenuHandler}>E-Shop</NavLink></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default MenuModal;