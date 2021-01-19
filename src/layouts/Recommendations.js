import React, { useEffect, useRef } from 'react';

import { opinionsData } from '../../src/data_recom.js';

import '../styles/sass/recommendations.sass';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const Recommendations = () => {

    const opinionsWrapper = useRef(null);

    useEffect(() => {
  
        gsap.fromTo(opinionsWrapper.current.children, {y: '+=100', autoAlpha: 0}, {y: 0, autoAlpha: 1, stagger: .5, duration: 2,
          scrollTrigger: {
            trigger: opinionsWrapper.current,
            start: 'top 65%',
            markers: true,
          }
        })
    }, [])

    let opinions = opinionsData.map(opinion =>
        <div key={opinion.id}><p>{opinion.text}</p><p>{opinion.author}</p></div>
    )

    return (
            <div className="recommendations">
                <h1>Recommendations</h1>
                <div className="opinions"  ref={opinionsWrapper}>
                    {opinions}
                </div>
            </div>
    )
}

export default Recommendations;