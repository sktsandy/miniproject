import React, { useContext } from 'react';
import Navbar from './Navbar';
import Items from './Items';
import { CardContext } from './Card';

const ContextCart = () => {
    const { shopingCart, totalPrice, clearCart, qty} = useContext(CardContext);
    

    // if(item.length === 0){
    //     return (
    //         <>
    //              <Navbar />
    //               <section className="main_cart_section container">
    //             <h2 className="mt-3"> Shopping cart </h2>
    //             <p> total item cart <span> { totalItem } </span> </p>
    //             </section>
    //         </>
    //     )
    // }
    return (
        <>
          <Navbar />
            
            <section className="main_cart_section container">
                <h2 className="mt-3"> Shopping cart </h2>
                <p> total item cart <span> {qty} </span> </p>
            <div className="cart-items_wrapper">

                
            {
               shopingCart.map((currItem) =>{
                    return <Items key={currItem.id} {...currItem} />
                })
            }
        </div>

            <div className="cart_total">
                <p> Cart Total: <b> { totalPrice }Rs. </b>  </p> 
            </div>
            <div className="cart_btn">
                 <button> Check Out </button>
                 <button class="clear_btn" onClick = {clearCart} > Clear Cart </button>
            </div>
              
            </section>
        </>
    )
}

export default ContextCart;
