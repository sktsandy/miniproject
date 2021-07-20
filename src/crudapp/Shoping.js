import React, { useContext } from 'react';
import { CardContext } from './Card';


const Shoping = () => {

    const { shopingCart, totalPrice } = useContext(CardContext);
    console.log(shopingCart);
    return (
        <>
            <h1 classnam="mt-5"> this is shhoping cart </h1>

            <div className="cart_wrapper">
       
       {
           shopingCart.map((cart) =>{
               return(
                   <>
                    <div className="cart_img">
                        <img src={cart.img} alt="img" />
                     </div>   
                     <h3> {cart.title} </h3>
                     <h4> {cart.price} Rs </h4>

                     

                     </>
               );

           })
       }
                 <p> <b> Grand Total:</b> {totalPrice} </p>    
                
            </div>
        </>
    );
}

export default Shoping;
