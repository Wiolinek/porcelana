import React from 'react';

import '../styles/Header.css';

const Header = () => {
    
   

    return (
    <>
        <header>
        <div className="bckg"></div>
        <div className="tagline">
            <p>Our <span className="design">design,</span></p>
            <div className="word"><p className="your word"><span>Your </span><span className="word style">style</span><span className="word life">life</span><span className="word joy">joy</span></p></div>
        </div>
        <button className="arrow"><i class="fas fa-angle-double-down"></i></button>
        </header>
    </>
    )
}   


export default Header;