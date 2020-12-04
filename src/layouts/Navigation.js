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
            <div className="contact_bar">FB</div>
            <div className="contact_bar">Insta</div>
            <div className="contact_bar">Twitter</div>
            <div className="contact_bar post msg">Msg</div>
            <div className="contact_bar post">E-mail</div>
        </aside>
    </nav>
    )
}   


export default Navigation;