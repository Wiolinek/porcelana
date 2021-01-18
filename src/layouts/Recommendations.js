import React from 'react';

import { opinionsData } from '../../src/data_recom.js';

import '../styles/sass/recommendations.sass';


const Recommendations = () => {

    let opinions = opinionsData.map(opinion =>
        <div key={opinion.id}><p>{opinion.text}</p><p>{opinion.author}</p></div>
    )

    return (
            <div className="recommendations">
                <h1>Recommendations</h1>
                <div className="opinions">
                    {opinions}
                </div>
            </div>
    )
}

export default Recommendations;