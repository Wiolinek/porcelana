import React from 'react';

import '../styles/sass/articles.sass';

const Products = () => {

    return (
            <div className="offer" id="products">
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
    )
}

export default Products;