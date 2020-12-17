import React from 'react';

import '../styles/Articles.css';


const About = () => {

    return (
        <>
            <section>
            <div className="about">
                <h1>About Us</h1>
                <p><span>International Ceramics Manufacturing Inc. </span>has been present on market for over 20 years. We specialize in the production of products for the HORECA industry. All the products we offer are manufactured in our factory in Poland.</p>
                <p>Our greatest <span>ambition</span> and goal is to meet the highest expectations and requirements of our client. We invest in the latest, most advanced technologies and machinery to be the best and most reliable ceramics producer on the market.</p>
                <p>In our projects, we combine <span>tradition</span> and elegance with modern design. Our <span>passion</span> and hard work can be seen in original and unique products design, effective trade policy and an excellent and profecional customer service. We can assure the highest <span>quality</span> of our products and long-term warehouse stock.</p>
                <p>Our succesfull, long-term <span>experience</span> in cooperation with hotels, restaurants and hospitals guarantees that we are able to provide plates tailored to all needs. So far, we can be proud of cooperation with clients from all over the Europe: Italy, Lithuania, Norway, Denmark, Germany, Switzerland, Ukraine, Portugal, France, Belgium, Greece, Romania and many more.</p>
                <p>This year, we launched an online store to reach also our retail customers.</p>
            </div>
            <div className="offer">
                <h1>Products</h1>
                <div className="products">
                    <div className="dish mugs"><p>Mugs</p><div className="more-btn"><a href="#">More</a></div></div>
                    <div className="dish cups"><p>Cups</p><div className="more-btn"><a href="#">More</a></div></div>
                    <div className="dish pots"><p>Coffee Pots</p><div className="more-btn"><a href="#">More</a></div></div>
                    <div className="dish plates"><p>Plates</p><div className="more-btn"><a href="#">More</a></div></div>
                    <div className="dish bowls"><p>Bowls</p><div className="more-btn"><a href="#">More</a></div></div>
                    <div className="dish vases"><p>Vases</p><div className="more-btn"><a href="#">More</a></div></div>
                </div>
            </div>
            <div className="recommendations">
                <h1>Recommendations</h1>
                <div className="opinions">
                    <div><p>"Excellent customer service, innovative and professional approach to cooperation, patience and flexibility. We cannot imagine a better partner in this difficult and demanding bussiness as hotel industry is."</p><p>-Reetz, Paris-</p></div>
                    <div><p>"People with extensive experience and ability to adapt to customer needs. Commitment, reliability and punctuality..."</p><p>-Interconteenentale, Prague-</p></div>
                    <div><p>"ICM has been a valuable business partner for us for many years. We appreciate their professional work and excellent consulting service."</p><p>-Palaza, Warsaw-</p></div>
                    <div><p>"The ICM brand has been supporting us in the development of our business for years. A wide range of products and their high quality go hand in hand with the image of our company."</p><p>-Radosson Blue, Prague-</p></div>
                    <div><p>"If you are looking for a business partner you can fully rely on, International Ceramics is your best choice. Their professionalism and attention to the smallest details make us constantly return for their products."</p><p>-Holton, Frankfurt-</p></div>
                </div>
            </div>
            <div className="careers">
                <h1>Careers</h1>
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
                            <tr>
                                <td><a href="#">Customer Service Specialist with English</a></td>
                                <td>Kraków</td>
                                <td>12-12-2020</td>
                            </tr>
                            <tr>
                                <td><a href="#">Customer Service Specialist with German</a></td>
                                <td>Kraków</td>
                                <td>18-12-2020</td>
                            </tr>
                            <tr>
                                <td><a href="#">Junior Web Developer</a></td>
                                <td>remote</td>
                                <td>28-12-2020</td>
                            </tr>
                            <tr>
                                <td><a href="#">Office Administrator</a></td>
                                <td>Radom</td>
                                <td>05-01-2021</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="join"><a href="#">Join us!</a></div>
            </div>
            </section>
        </>
    )

}

export default About;