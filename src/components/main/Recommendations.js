import React, { useEffect, useRef } from 'react';

import { opinionsData } from '../../../src/data_recom.js';

import '../../styles/sass/main/recommendations.sass';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const Recommendations = () => {

    const opinionsWrapper = useRef(null);

    useEffect(() => {
  
        gsap.fromTo(opinionsWrapper.current.children, {y: '+=170', scale: 1.4, autoAlpha: 0}, {y: 0, scale: 1, autoAlpha: 1, stagger: .7, duration: 2, ease: "power1.inOut",
          scrollTrigger: {
            trigger: opinionsWrapper.current,
            start:'top 60%',
            end:'bottom bottom',
            scrub: 0,
            // pin: true,
            //events: onEnter onLeave onEnterBack onLeaveBack
            toggleActions:'play restart complete reverse',
            //options: play plause resume reset restart complete reverse none
            // markers:true,
          }
        })
    }, [])

    const opinions = opinionsData.map(opinion =>
        <div key={opinion.id}><p>{opinion.text}</p><p>{opinion.author}</p></div>
    )

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