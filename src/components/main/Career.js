import React, { useEffect, useRef, useState} from 'react';
import { Link } from 'react-scroll';
import dayjs from 'dayjs';

import CareerModal from './CareerModal';

import '../../styles/sass/main/career.sass';

import axios from "axios";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const Career = () => {

    const [jobOffersData, setJobOffersData] = useState([]);

    useEffect(() => {

        axios.get(`http://localhost:3030/offers`)
            .then(response => {
            const offers = response.data;
            setJobOffersData(offers);
            })
      }, []);
    
    const [state, setState] = useState(false);
    const [offer, setOffer] = useState();

    const careerWrapper = useRef(null);
    const jointBtnAnimation = useRef(null);

    const closeModalHandler = () => setState(false);

    const openModalHandler = (offer) => {
        setState(true);
        setOffer(offer.id)
    }

    const jobOffers = jobOffersData.map(offer => (
        <tr key={offer.id}>
            <td><button className="open-offer-modal-btn" onClick={() => openModalHandler(offer)}>{offer.name}</button></td>
            <td>{offer.location}</td>
            <td>{dayjs(offer.date).format('DD/MM/YYYY')}</td>
        </tr>
        )
    )

    useEffect(() => {
  
        gsap.from(careerWrapper.current, {y: '+=150', autoAlpha: 0,
          scrollTrigger: {
            trigger: careerWrapper.current,
            start:'top 60%',
            end:'bottom bottom',
            scrub: 1,
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
            <div className="career">
                <h1>Career</h1>
                <div className="offers" ref={careerWrapper}>
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
                <CareerModal state={state} closeModalHandler={closeModalHandler} jobOffersData={jobOffersData} offer={offer}/>
            </div>
    )
}

export default Career;