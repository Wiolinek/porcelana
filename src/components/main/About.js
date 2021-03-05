import React, { useEffect, useRef } from 'react';

import '../../styles/sass/main/about.sass';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const About = () => {

    const aboutWrapper = useRef(null);

    useEffect(() => {
  
        gsap.fromTo(aboutWrapper.current.children, {y: '+=150', autoAlpha: 0}, {y: 0, autoAlpha: 1, stagger: .5, ease: 'power1.inOut',
          scrollTrigger: {
            trigger: aboutWrapper.current,
            start:'top 60%',
            end:'bottom bottom',
            scrub: 1,
            // pin: true,
            // pinSpacing: false,
            //events: onEnter onLeave onEnterBack onLeaveBack
            toggleActions:'play restart complete reverse',
            //options: play plause resume reset restart complete reverse none
            // markers:true,
          }
        })
    }, [])


    return (
      <>
         <section className="about-text">
            <h1>About Us</h1>
            <div ref={aboutWrapper}>
              <p><span>International Ceramics Manufacturing Inc. </span>has been present on market for over 21 years. We specialize in the production of products for the HORECA industry. All the products we offer are manufactured in our factory in Poland.</p>
              <p>Our greatest <span>ambition</span> and goal is to meet the highest expectations and requirements of our client. We invest in the latest, most advanced technologies and machinery to be the best and most reliable ceramics producer on the market.</p>
              <p>In our projects, we combine <span>tradition</span> and elegance with modern design. Our <span>passion</span> and hard work can be seen in original and unique products design, effective trade policy and an excellent and profecional customer service. We can assure the highest <span>quality</span> of our products and long-term warehouse stock.</p>
              <p>Our succesfull, long-term <span>experience</span> in cooperation with hotels, restaurants and hospitals guarantees that we are able to provide plates tailored to all needs. So far, we can be proud of cooperation with clients from all over the Europe: Italy, Lithuania, Norway, Denmark, Germany, Switzerland, Ukraine, Portugal, France, Belgium, Greece, Romania and many more.</p>
              <p>This year, we launched an online store to reach also our retail customers.</p>
            </div>
         </section>
         <section className="numbers">
         {/* <i class="fas fa-coffee"></i> */}
           <div><i class="fas fa-poll"></i><p>80 000 000</p><p>Manufactured Pieces</p></div>
           <div><i class="fas fa-truck"></i><p>325</p><p>Distributors</p></div>
           <div><i class="fas fa-users"></i><p>127</p><p>Employees</p></div>
           <div><i class="fas fa-globe"></i><p>25</p><p>Export countries</p></div>
           <div><i class="fas fa-shield-alt"></i><p>21</p><p>Years of experience</p></div>
         </section>
      </>
    )
}

export default About;