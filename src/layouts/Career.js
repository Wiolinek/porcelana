import React, { useEffect, useRef, useState} from 'react';
import { Link } from 'react-scroll'

import { jobOffersData } from '../../src/data_career.js';

import Modal from './Modal';

import '../styles/sass/career.sass';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const Career = () => {
    
    const [state, setState] = useState(false);
    const [offer, setOffer] = useState();

    const careerWrapper = useRef(null);
    const jointBtnAnimation = useRef(null);

    const closeModalHandler = () => setState(false);

    const openModalHandler = (offer) => {
        setState(true);
        setOffer(offer.id)
    }

    let jobOffers = jobOffersData.map(offer => (
        <tr key={offer.id}>
            <td><button className="open-offer-modal-btn" onClick={() => openModalHandler(offer)}>{offer.name}</button></td>
            <td>{offer.location}</td>
            <td>{offer.date}</td>
        </tr>
        )
    )

    useEffect(() => {
  
        gsap.fromTo(careerWrapper.current.children, {y: '+=150', autoAlpha: 0}, {y: 0, autoAlpha: 1, stagger: .5, duration: 2,
          scrollTrigger: {
            trigger: careerWrapper.current,
            start:'top 60%',
            end:'bottom bottom',
            scrub: 0,
            //events: onEnter onLeave onEnterBack onLeaveBack
            toggleActions:'play restart complete reverse',
            //options: play plause resume reset restart complete reverse none
            // markers:true,
          }})
        gsap.from(jointBtnAnimation.current, {scale: 0, duration: 2, ease: 'power1.inOut',
            scrollTrigger: {
                trigger: jointBtnAnimation.current,
                start:'100% bottom',
                end:'top 90%',
                scrub: 0,
                //events: onEnter onLeave onEnterBack onLeaveBack
                toggleActions:'play restart complete reverse',
                //options: play plause resume reset restart complete reverse none
                // markers:true,
              }})
    }, [])

    return (
            <div className="career" ref={careerWrapper}>
                <h1>Career</h1>
                <div className="offers">
                    <div><p>We are a constantly developing, stable and reliable company based on tradition and respect. Do you want to become part of our success? Check out our current job openings below and let us know about your experience and potential.</p></div>
                    <table>
                        <thead>
                            <tr>
                                <th>Job offer</th>
                                <th className="location">Location</th>
                                <th className="date">Added</th>
                            </tr>
                        </thead>
                        <tbody>
                            {jobOffers}
                        </tbody>
                    </table>
                </div>
                <div className="join" ref={jointBtnAnimation}><Link to="contact" smooth={true}>Join us!</Link></div>
                { state ? <div className="back" onClick={closeModalHandler}></div> : null }
                <Modal state={state} closeModalHandler={closeModalHandler} offer={offer}/>
            </div>
    )
}

export default Career;