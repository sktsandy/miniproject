import React, { useContext } from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { CardContext } from './Card';

const Navbar = () => {

    const { qty } = useContext(CardContext);

    return (
        <>
            <div className="header">
               
                <h2>  <ArrowBackIcon /> Create shopping</h2>
                <div className="header_icon">
                     <ShoppingCartIcon /> <p> { qty } </p>
                </div>  
            </div>
        </>
    )
}

export default Navbar;
