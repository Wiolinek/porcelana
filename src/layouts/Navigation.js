import React from 'react';

import '../styles/Navigation.css';

import logo from '../images/plate.png';

const Navigation = () => {

    return (
    <nav className="nav">
        <img alt="logo" className="logo ikon" src={logo}/><div><p className="logo name">ICM Inc.</p></div>
        <button className="nav_btn"><p>About Us</p></button>
        <button className="nav_btn"><p>Products</p></button>
        <button className="nav_btn"><p>Recommendations</p></button>
        <button className="nav_btn"><p>Careers</p></button>
        <button className="nav_btn"><p>E-Shop</p></button>
        <button className="nav_btn"><p>Contact</p></button>
    </nav>
    )
}   


export default Navigation;