import React from 'react';
import picture from '../images/header_2.jpg';
import '../styles/Header.css'

const Header = () => {
    const words = ['style', 'life', 'joy']

    return (
    <>
        <img src={picture} alt="table" className="bckg"></img>
        <p><span className="design">Our design,</span>
        <span className="your">Your </span>
        <span className="words">{words}</span>
        </p>
    </>
    )
}   


export default Header;