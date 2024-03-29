import React from 'react';

import { Link } from 'react-scroll';

import '../../styles/sass/main/career-modal.sass';


const CareerModal = ({ careerModalState, offer, closeModalHandler, jobOffersData }) => {
    
    //find which object in array was clicked and return it
    let index = jobOffersData.find(({ id }) => id === offer);

    if(index === undefined) return null

    let { name, location, department, employment_type, position_description, position_requirements, personal_requirements, what_we_offer } = index; //elements selected clicked object in jobOffersData array

        return (
            <div className="career-modal" style={{
                transform: careerModalState ? 'translateY(0vh)' : 'translateY(-100vh)',
                opacity: careerModalState ? '1' : '.5',
                }}>
                <button className="close-btn" onClick={closeModalHandler}>Close</button>
                <div>
                    <h2>{name}</h2>
                    <p><span>Location: </span><span>{location}</span></p>
                    <p><span>Department: </span>{department}</p>
                    <p><span>Employment Type: </span><span>{employment_type}</span></p>
                    <p><span>Position Description: </span><span>{position_description}</span></p>
                    <p><span>Position Requirements: </span><span>{position_requirements}</span></p>
                    <p><span>Personal Requirements: </span><span>{personal_requirements}</span></p>
                    <p><span>What We Offer: </span><span>{what_we_offer}</span></p>
                </div>
                <div className="send-cv-btn"><Link to="contact" smooth={true} onClick={closeModalHandler}>Send CV</Link></div>
            </div>
        )
}

export default CareerModal;