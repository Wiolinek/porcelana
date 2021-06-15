import React from 'react';

import '../../styles/sass/main/contact.sass';


const Contact = () => {

    return (
        <>
            <div className="newsletter" id="contact">
                <div className="newsletter-icon">
                    <i className="far fa-newspaper"></i>
                    <p>Newsletter</p>
                </div>
                <p>Sign in and stay in touch!</p>
                <form>
                    <label htmlFor="user_email">E-mail:</label>
                    <input type="email" id="user_email" name="user_email" required></input>
                    <input type="submit" value="Send"></input>
                </form>
            </div>
            <div className="contact_section">
                <h1 className="contact_title">Contact Us!</h1>
                <div className="contact_form">
                    <div className="address">
                        <p>International Ceramics Manufacturing Inc.</p>
                        <p>ul. Międzynarodowa 26,<br />26-612 Radom, Polska</p>
                        <p>Tel.: +48 48 340 23 56</p>
                        <p>E-mail: office@icm.pl</p>
                    </div>
                    <div className="form">
                        <form>
                            <label htmlFor="user_name">Name:</label>
                            <input type="text" id="user_name" name="user_name" required></input>
                            <label htmlFor="user_surname">Surname:</label>
                            <input type="text" id="user_surname" name="user_surname" required></input>
                            <label htmlFor="user_email">E-mail:</label>
                            <input type="email" id="user_email" name="user_email" required></input>
                            <label htmlFor="user_message">Message:</label>
                            <textarea type="text" id="user_message" name="user_message" required></textarea>
                            <label htmlFor="user_file">Add file:</label>
                            <input type="file" id="user_file" name="user_file"></input>
                            <input type="submit" value="Send"></input>
                        </form>
                    </div>
                </div>
            </div>
            <footer className="contribution">Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></footer>   
        </>
    )
}

export default Contact;