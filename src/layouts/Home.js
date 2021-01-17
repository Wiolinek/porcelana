import React from 'react';

import '../styles/sass/home.sass';
// import styled from 'styled-components';

const Home = () => {

    return (
    <section className='home'>
        <div>
            <p>Our design</p>
            <p>Your <span>style</span></p>
        </div>
        <button><i class="fas fa-angle-double-down"></i></button>
    </section>
    )
}   

export default Home;