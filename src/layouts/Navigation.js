import React from 'react';

import '../styles/Navigation.css';

const Navigation = () => {

    return (
    <nav className="nav">
        <button className="nav_btn"><p>About Us</p></button>
        <button className="nav_btn"><p>Products</p></button>
        <button className="nav_btn"><p>Shop</p></button>
        <button className="nav_btn"><p>Contact</p></button>
    </nav>
    )
}   


export default Navigation;