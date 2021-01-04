import React from 'react';
import '../styles/Shop.css';


const ShopMenu = () => {

    let shopMenuOptions = ["Show All", "Mugs", "Cups", "Tea Pots", "Plates", "Bowls", "Vases"];
    let shopMenu = shopMenuOptions.map(item =>
        <li key={item}><p>{item}</p></li>
    )

    return (
        <ul className="shop-menu">
            {shopMenu}
        </ul>
    )
}


export default ShopMenu;