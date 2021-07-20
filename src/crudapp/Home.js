import React, { useContext } from 'react';
import { CardContext } from './Card';

const Home = () => {

    const { Products } = useContext(CardContext);
    const { dispatch } = useContext(CardContext);
    return (
        <>
            <div className="home_wrapper mb-5">
                <div className="container">
                    <div className="row">

                    {
                        Products.map((products) =>{
                            return (
                                <div className="col-md-4" key={products.id}>
                                <div className="product_img">
                                    <img src={products.img} alt="img" />
                                </div>
                                <h2> {products.title} </h2>
                                <h3> { products.price} </h3>
                                <button onClick={() => dispatch({type: 'ADD_TO_CART', id: products.id, products})}> 
                                add to cart </button>
                            </div>
                            );
                        })
                    }
                    </div>
                </div>
            </div>
        </>

        
    )
}

export default Home;
