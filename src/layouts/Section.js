import React from 'react';

import '../styles/Section.css';

const Section = () => {

    return (
    <>
        <section className ="header">
        <div className="tagline">
            <p>Our design</p>
            <p>Your <span>style</span></p>
        </div>
        <button className="arrow"><i class="fas fa-angle-double-down"></i></button>
        </section>
    </>
    )
}   


export default Section;