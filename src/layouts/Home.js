import React from 'react';

import styled from 'styled-components';

const Home = () => {

    return (
    <>
        <HomeHeader>
        <div>
            <p>Our design</p>
            <p>Your <span>style</span></p>
        </div>
        <button><i class="fas fa-angle-double-down"></i></button>
        </HomeHeader>
    </>
    )
}   

const HomeHeader = styled.section`
    height: 100vh;

div {
   display: block;
   position: absolute;
   top: 30vh;
   left: 16vw;
   width: 60vw;
   font-size: 130px;
   font-family: 'Raleway Dots', cursive;
   text-transform: uppercase;
   letter-spacing: .3vw;
   line-height: 180px;
 }

div span {
    font-family: 'Unica One', cursive;
    font-size: 155px;
    text-transform: lowercase;
    letter-spacing: .9vw;
    }

div p:last-child {
    padding-top: 3vh;
    padding-left: 5vw;
 }

button {
    position: absolute;
    bottom: 3vh;
    right: calc(50vw - 35px);
    height: 100px;
    width: 70px;
    border: none;
    background-color: rgba(255,255,255,0);
    align-content: center;
    outline: 0;
    }
`;

export default Home;