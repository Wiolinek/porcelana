import React from 'react';

import '../styles/Header.css';

const Header = () => {

    return (
    <>
        <div className="bckg"></div>
        <div className="tagline">
            <p><span className="design">Our design,</span></p>
            <p className="your"><span>Your </span><span className="word style">style</span><span className="word life">life</span><span className="word joy">joy</span></p>
        </div>
        <button className="arrow"><i class="fas fa-angle-double-down"></i></button>
    </>
    )
}   


export default Header;