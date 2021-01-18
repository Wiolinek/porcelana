import React from 'react';
import { jobOffersData } from '../../src/data_career.js';
import { Link } from 'react-scroll';

import '../styles/sass/modal.sass';
// import {Link} from 'react-router-dom';



const Modal = ({ state, offer, closeModalHandler }) => {
    
    //find which object in array was clicked and return it
    let index = jobOffersData.find(({ id }) => id === offer);

    if(index === undefined) return null

    let { name, location, department, employmentType, positionDescription, positionRequirements, personalRequirements, whatWeOffer } = index; //elements selected clicked object in jobOffersData array

        return (
            <div className="modal-wrapper" style={{
                display: state ? 'block' : 'none',
                // transform: state ? 'translateY(0vh)' : 'translateY(-100vh)',
            }}>
                <button className="close-btn" onClick={closeModalHandler}>Close</button>
                <div>
                    <h2>{name}</h2>
                    <p><span>Location: </span><span>{location}</span></p>
                    <p><span>Department: </span>{department}</p>
                    <p><span>Employment Type: </span><span>{employmentType}</span></p>
                    <p><span>Position Description: </span><span>{positionDescription}</span></p>
                    <p><span>Position Requirements: </span><span>{positionRequirements}</span></p>
                    <p><span>Personal Requirements: </span><span>{personalRequirements}</span></p>
                    <p><span>What We Offer: </span><span>{whatWeOffer}</span></p>
                </div>
                <div className="send-cv-btn"><Link to="contact" smooth={true} onClick={closeModalHandler}>Send CV</Link></div>
            </div>
    )
}

export default Modal;