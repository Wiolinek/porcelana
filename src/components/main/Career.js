import React, { useEffect, useRef, useState } from 'react';
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
    const [careerModalState, setCareerModalState] = useState(false);
    const [offer, setOffer] = useState();

    const careerWrapper = useRef(null);
    const jointBtnAnimation = useRef(null);

    useEffect(() => {

        axios.get(`http://localhost:3030/offers`)
            .then(response => {
            const offers = response.data;
            setJobOffersData(offers);
            }
        )
    }, []);
    
    const closeModalHandler = () =>  {
        setCareerModalState(false);
        document.body.style.overflow = "visible";
    }
    

    const openModalHandler = (offer) => {
        document.body.style.overflow = "hidden";
        setCareerModalState(true);
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


    return (
            <article className="career">
                <h1>Career</h1>
                <div className="offers" ref={careerWrapper}>
                    <p>We are a constantly developing, stable and reliable company based on tradition and respect. Do you want to become part of our success? Check out our current job openings below and let us know about your experience and potential.</p>
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
                    { careerModalState ? <div className="career-modal-back" onClick={closeModalHandler}></div> : null }
                    <CareerModal careerModalState={careerModalState} closeModalHandler={closeModalHandler} jobOffersData={jobOffersData} offer={offer}/>
            </article>
    )
}

export default Career;