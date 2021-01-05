import React from 'react';
import { jobOffersData } from '../../src/data_career.js';
import { Link } from 'react-scroll'

// import {Link} from 'react-router-dom';
// import { Modal } from 'react-responsive-modal';

import '../styles/Articles.css';
// import 'react-responsive-modal/styles.css';


const Modal = ({ state, offer, closeModalHandler }) => {
    

    let index = jobOffersData.findIndex(jobOffer => jobOffer.id === offer);

    let offerDisplay = jobOffersData[0];

    let { id, name, location, department } = offerDisplay;


        return (
            <div className="modal-wrapper" style={{
                display: state ? 'block' : 'none',
                // transform: state ? 'translateY(0vh)' : 'translateY(-100vh)',
                }}>
                <h1>Numer indexu pozycji w tablicy Array: {index}</h1>
                <h1>Numer ID oferty w tabeli Array to: {id}</h1>
                <h1>pozycja na liście ofert na stronie to: {offer}</h1>
                <h1>nazwa oferty to: {name}</h1>  
                <p><span>Location: </span><span>{location}</span></p>
                <p><span>Department: </span>{department}</p>
            {/* <p><span>Employment Type: </span><span>{offer.['employment type']}</span></p> */}
            {/* <p><span>Position Description: </span><span>{offer.['position description']}</span></p> */}
            {/* <p><span>Position Requirements: </span><span>{offer.['position requirements']}</span></p> */}
            {/* <p><span>Personal Requirements: </span><span>{offer.['personal requirements']}</span></p> */}
            {/* <p><span>What We Offer: </span><span>{offer.['what we offer']}</span></p> */}
            <button className="close-btn" onClick={closeModalHandler}>Close</button>
            <div className="send-cv-btn"><Link to="contact" smooth={true} onClick={closeModalHandler}>Send CV</Link></div>
            </div>
    )
}

export default Modal;