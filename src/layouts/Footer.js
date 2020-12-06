import React from 'react';

import '../styles/Footer.css';


const Footer = () => {

    return (
        <div className="contact">
            <div className="contact_form">
                <p>Contact Us!</p>
            <form>
                <label>Your name:
                <input type="text" required></input>
                </label>
                <label>Your surname:
                <input type="text" required></input>
                </label>
                <label>Your email address:
                <input type="email"></input>
                </label>
                <label>Your message:
                <input type="text"></input>
                </label>
            </form>
            </div>
            <div className="contribution">Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>   
        </div> 
    )
}

export default Footer;