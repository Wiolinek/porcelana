import React from 'react';

import '../styles/Articles.css';

let jobOffersData = [
    {   
        id: 1,
        name: "Customer Service Specialist with English",
        location: "Kraków",
        date: "12-12-2020",
        clicked: false,
    },
    {   
        id: 2,
        name: "Customer Service Specialist with German",
        location: "Kraków",
        date: "18-12-2020",
        clicked: false,
    },
    {   
        id: 3,
        name: "Front-end Developer",
        location: "remote",
        date: "12-12-2020",
        clicked: false,
    },
    {   
        id: 4,
        name: "Office Administrator",
        location: "Radom",
        date: "05-01-2021",
        clicked: false,
    },
]

let opinionsData = [
    {   
        id: 1,
        text: "\"Excellent customer service, innovative and professional approach to cooperation, patience and flexibility. We cannot imagine a better partner in this difficult and demanding bussiness as hotel industry is.\"",
        author: "-Reetz, Paris-",
    },
    {   
        id: 2,
        text: "\"People with extensive experience and ability to adapt to customer needs. Commitment, reliability and punctuality...\"",
        author: "-Interconteenentale, Prague-",
    },
    {   
        id: 3,
        text: "\"ICM has been a valuable business partner for us for many years. We appreciate their professional work and excellent consulting service.\"",
        author: "-Palaza, Warsaw-",
    },
    {   
        id: 4,
        text: "\"The ICM brand has been supporting us in the development of our business for years. A wide range of products and their high quality go hand in hand with the image of our company.\"",
        author: "-Radosson Blue, Prague-",
    },
    {   
        id: 5,
        text: "\"If you are looking for a business partner you can fully rely on, International Ceramics is your best choice. Their professionalism and attention to the smallest details make us constantly return for their products.\"",
        author: "-Holton, Frankfurt-",
    },
]

const About = () => {

    let jobOffers = jobOffersData.map(offer => (
        <tr>
            <td key={offer.id}><a href="#" /*tutaj metoda onClick która wyświetla ofertę pracy i zmienia clicked na true*/>{offer.name}</a></td>
            <td key={offer.id}>{offer.location}</td>
            <td key={offer.id}>{offer.date}</td>
        </tr>
        )
    )

    let opinions = opinionsData.map(opinion =>
        <div key={opinion.id}><p>{opinion.text}</p><p>{opinion.author}</p></div>
    )

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
                    {opinions}
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
                            {jobOffers}
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