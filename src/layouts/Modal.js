import React from 'react';
import { jobOffersData } from '../../src/data_career.js';

// import {Link} from 'react-router-dom';
// import { Modal } from 'react-responsive-modal';

import '../styles/Articles.css';
// import 'react-responsive-modal/styles.css';


const Modal = ({ state, offer, closeModalHandler }) => {

    // jobOffersData.map(item => {

    //     if (jobOffersData.id === props.offer) {
    //         
    //     }

    const offerDisplay = jobOffersData.findIndex(jobOffer => jobOffer.id === offer);

        return (
        <div className="modal-wrapper" style={{
            display: state ? 'block' : 'none',
            // transform: state ? 'translateY(0vh)' : 'translateY(-100vh)',
            }}>
            <h1>Numer indexu w tabeli to: {offerDisplay} a pozycja na liście ofert to: {offer}</h1>
            {/* <p><span>Location: </span><span>{offerDisplay}</span></p> */}
            {/* <p><span>Department: </span>{jobOffersData[{offerDisplay}].id}</p> */}
            {/* <p><span>Employment Type: </span><span>{offer.['employment type']}</span></p> */}
            {/* <p><span>Position Description: </span><span>{offer.['position description']}</span></p> */}
            {/* <p><span>Position Requirements: </span><span>{offer.['position requirements']}</span></p> */}
            {/* <p><span>Personal Requirements: </span><span>{offer.['personal requirements']}</span></p> */}
            {/* <p><span>What We Offer: </span><span>{offer.['what we offer']}</span></p> */}
            <button className="close-btn" onClick={closeModalHandler}></button>
        </div>
    )
}

export default Modal;