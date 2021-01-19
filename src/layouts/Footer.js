import React, { useEffect, useRef } from 'react';

import '../styles/sass/footer.sass';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const Footer = () => {

    const footerWrapper = useRef(null);

    useEffect(() => {
  
        gsap.fromTo(footerWrapper.current.children, {y: '+=100', autoAlpha: 0}, {y: 0, autoAlpha: 1, stagger: .5, duration: 2,
          scrollTrigger: {
            trigger: footerWrapper.current,
            start: 'top 65%',
            markers: true,
          }
        })
    }, [])


    return (
        <div ref={footerWrapper}>
        <div className="newsletter">
            <div><i class="far fa-newspaper"></i><p>Newsletter</p></div>
            <p>Sign in and stay in touch!</p>
            <form>
                    <label htmlFor="user_email">E-mail:</label>
                    <input type="email" id="user_email" name="user_email" required></input>
                    <input type="submit" value="Send"></input>
            </form>
        </div>
        <div className="contact_form" id="contact">
            <h1 className="contact_title">Contact Us!</h1>
            <div className="address">
                <p>International Ceramics Manufacturing Inc.</p>
                <p>ul. Międzynarodowa 26,<br />26-612 Radom, Polska</p>
                <p>Telephone: +48 48 340 23 56</p>
                <p>E-mail: office@icm.pl</p>
            </div>
            <div className="form">
                <form>
                    <label htmlFor="user_name">Name:<br/>
                    <input type="text" id="user_name" name="user_name" required></input></label>
                    <label htmlFor="user_surname">Surname:<br/>
                    <input type="text" id="user_surname" name="user_surname" required></input></label>
                    <label htmlFor="user_email">E-mail:<br/>
                    <input type="email" id="user_email" name="user_email" required></input></label>
                    <label htmlFor="user_message">Message:<br/>
                    <textarea type="text" id="user_message" name="user_message" required></textarea></label>
                    <label htmlFor="user_file">Add file:<br/>
                    <input type="file" id="user_file" name="user_file"></input></label>
                    <input type="submit" value="Send"></input>
                </form>
            </div>
        </div>
        <div className="contribution">Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>   
        </div>
    )
}

export default Footer;