import React from 'react';

import '../../styles/sass/shop/shop-no-search-results.sass';


const ShopNoSearchResults = () => {


    return (
        <div className="shop-no-results">
            <i className="fab fa-searchengin"></i>
            <p>We cannot find what you are looking for...</p>
        </div>
    )

}


export default ShopNoSearchResults;