import React from 'react';
import { jobOffersData } from '../../src/data_career.js';
import { Link } from 'react-scroll';

// import {Link} from 'react-router-dom';

import styled from 'styled-components';
// import 'react-responsive-modal/styles.css';


const Modal = ({ state, offer, closeModalHandler }) => {
    
    //find which object in array was clicked and return it
    let index = jobOffersData.find(({ id }) => id === offer);

    if(index === undefined) return null

    let { name, location, department, employmentType, positionDescription, positionRequirements, personalRequirements, whatWeOffer } = index; //elements selected clicked object in jobOffersData array

        return (
            <ModalWrapper style={{
                display: state ? 'block' : 'none',
                // transform: state ? 'translateY(0vh)' : 'translateY(-100vh)',
            }}>
                <button onClick={closeModalHandler}>Close</button>
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
            </ModalWrapper>
    )
}

const ModalWrapper = styled.div`
    margin: 0 auto;
    display: none;
    position: fixed;
    top: 3vh;
    left: 10vw;
    background-color: #d0d0dc;
    height: 94vh;
    width: 80vw;
    padding: 0 2vw;
    overflow: auto;
        /* transition: all 1.3s ease; */

span:first-child {
    font-weight: 700;
    font-size: 19px;
}

div {
    font-size: 19px;
}

div p {
    padding-top: 1.3vh;
}

.send-cv-btn {
    border: 3px solid #d0d0dc;
    color: #d0d0dc;
    text-shadow: 2px 2px 3px black;
    font-size: 22px;
    border-radius: 50%;
    margin: 3vh 3vh 3vh auto;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
    width: 115px;
    height: 115px;
    outline: none;
}
  
button {
    font-family: 'Cinzel', serif;
    border: 3px solid #d0d0dc;
    color: #d0d0dc;
    text-shadow: 2px 2px 3px black;
    font-size: 17px;
    border-radius: 50%;
    margin: 3vh 3vh 1vh auto;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
    width: 70px;
    height: 70px;
    outline: none;
}


`;

export default Modal;