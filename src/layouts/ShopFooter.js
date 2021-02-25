import React from 'react';

import '../styles/sass/shop-footer.sass';


const ShopFooter = () => {


    return (
        <div className="newsletter" id="contact">
            <div><i className="far fa-newspaper"></i><p>Newsletter</p></div>
            <p>Sign in and stay in touch!</p>
            <form>
                    <label htmlFor="user_email">E-mail:</label>
                    <input type="email" id="user_email" name="user_email" required></input>
                    <input type="submit" value="Send"></input>
            </form>
        </div>
    )

}


export default ShopFooter;