import React from 'react';

import { jobOffersData } from '../../src/data_career.js';

import '../styles/Articles.css';


const Career = () => {
    
    const handleOfferDisplay = (props) => {
        return (
        alert(`${props.name}`)
        /*tutaj musi się zmieniać .offer-details display: block na none*/
        )
    }

    const jobOffers = jobOffersData.map(offer => (
        <tr>
            <td key={offer.id} name={offer.name}><button onClick={handleOfferDisplay} name={offer.name}>{offer.name}</button></td>
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
                    <OfferDetails parameter={}/>  
                </div>
                <div className="join"><a href="#">Join us!</a></div>
            </div>
    )
}

const OfferDetails = (props) => {

    return (
        <div className="offer-details">
            <p>{props.parameter}</p>
            <p>{props.parameter}</p>
            <p>{props.parameter}</p>
            <p>{props.parameter}</p>
            <p>{props.parameter}</p>
        </div>
    )
}

export default Career;