import React from 'react';
const logo = <img src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png" 
alt="logo"/>

const Header = () => {

    return(
        <>
            <div className="header">
                {logo}
                <h2> Sk Keep </h2>
            </div>
        </>
    )
}

 
export default Header;