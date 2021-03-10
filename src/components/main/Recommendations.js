import React, { useEffect, useRef, useState } from 'react';

import '../../styles/sass/main/recommendations.sass';

import axios from "axios";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const Recommendations = () => {

    const [opinionsData, setOpinionsData] = useState([]);
    const opinionsWrapper = useRef(null);
    
    useEffect(() => {
        axios.get(`http://localhost:3030/recommendations`)
            .then(response => {
            const opinions = response.data;
            setOpinionsData(opinions);
            });
    }, []);


    const opinions = opinionsData.map(opinion =>
        <div key={opinion.id}><p>{opinion.text}</p><p>{opinion.author}</p></div>
    )
    

    useEffect(() => {
        gsap.fromTo(opinionsWrapper.current.children, {y: '+=170', scale: 1.4, autoAlpha: 0}, {y: 0, scale: 1, autoAlpha: 1, stagger: .5,
            scrollTrigger: {
                trigger: opinionsWrapper.current,
                start:'top 60%',
                end:'bottom bottom',
                scrub: 1,
                pin: ".pin",
                  //events: onEnter onLeave onEnterBack onLeaveBack
                toggleActions:'play restart complete reverse',
                  //options: play plause resume reset restart complete reverse none
                  // markers:true,
            }
        })
    }, [opinionsData]);

    return (
            <>
                <h1>Recommendations</h1>
                <div className="opinions" ref={opinionsWrapper}>
                    {opinions}
                </div>
            </>
    )
}

export default Recommendations;