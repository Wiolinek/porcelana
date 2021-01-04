import React, { useState } from 'react';
import { Link } from 'react-scroll'

import { jobOffersData } from '../../src/data_career.js';
// import {Link} from 'react-router-dom';
// import { Modal } from 'react-responsive-modal';
import Modal from './Modal';

import '../styles/Articles.css';

// import 'react-responsive-modal/styles.css';

const Career = () => {
    
    const [state, setState] = useState(false);
    const [offer, setOffer] = useState();

    const closeModalHandler = () => setState(false);

    const openModalHandler = (offer) => {
        setState(true);
        setOffer(offer.id);
        alert(`${offer.id}`)
    }

    let jobOffers = jobOffersData.map(offer => (
        <tr>
            <td key={offer.id} name={offer.name}><button onClick={() => openModalHandler(offer)}>{offer.name}</button></td>
            <td key={offer.id}>{offer.location}</td>
            <td key={offer.id}>{offer.date}</td>
        </tr>
        )
    )

    return (
            <div className="career">
                <h1>Career</h1>
                <div className="offers">
                    <div><p>We are a constantly developing, stable and reliable company based on tradition and respect. Do you want to become part of our success? Check out our current job openings below and let us know about your experience and potential.</p></div>
                    <table>
                        <thead>
                            <tr>
                                <th className="job-offer">Job offer</th>
                                <th className="location">Location</th>
                                <th className="date">Added</th>
                            </tr>
                        </thead>
                        <tbody>
                            {jobOffers}
                        </tbody>
                    </table>
                </div>
                <div className="join"><Link to="contact" smooth={true}>Join us!</Link></div>
                { state ? <div className="back" onClick={closeModalHandler}></div> : null }
                <Modal state={state} closeModalHandler={closeModalHandler} offer={offer}/>
            </div>
    )
}

export default Career;