import React from 'react';

import '../styles/Footer.css';


const Footer = () => {

    return (
        <>
        <div className="contact_form">
            <p className="contact_title">Contact Us!</p>
            <div className="address">
                <p>International Ceramics Manufacturing Inc.</p>
                <p>ul. Międzynarodowa 26,<br />26-612 Radom, Polska</p>
                <p>Telephone: +48 48 340 23 56</p>
                <p>E-mail: office@icm.pl</p>
            </div>
            <div className="form">
                <form>
                    <label>Name:</label>
                    <input type="text" name="user_name" required></input>
                    <label>Surname:</label>
                    <input type="text" name="user_surname"required></input>
                    <label>E-mail:</label>
                    <input type="email" name="user_email"required></input>
                    <label>Message:</label>
                    <textarea type="text" name="user_message" required></textarea>
                    <label>Add file:</label>
                    <input type="file" name="user_file"></input>
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
        <div className="contribution">Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>   
        </>
    )
}

export default Footer;