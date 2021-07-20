import React, { createContext, useReducer, useEffect } from 'react';
import '../css/crud.css';
import Products from './Products';
import ContextCart from './ContextCart';
import {reducer} from './reducer';
import Home from './Home';
import Shoping from './Shoping';

   export const CardContext = createContext();

   const initialState = {
       item: Products,
       shopingCart:[],
       totalItem: 0,
       qty: 0,
       totalPrice: 0
   };

const Card = () => {
   // const [item, setItem] = useState(Products);

   const [state, dispatch] = useReducer(reducer, initialState);

   ///to delete the item from item cart..
   const removeItem = (id) =>{
        return dispatch({
            type: "REMOVE_ITEM",
            payload: id,
        });
   };
    

   //clear all the items from cart
   const clearCart = () =>{
       return dispatch({ type: "CLEAR_ALL", });
   }


 /// Add items from cart
const addItems = (id) =>{
    return dispatch({
        type: "ADD_ITEM",
        payload: id,
    });
}

//// decrement item from cart
const decrementItem = (id) =>{
    return dispatch({
        type: "DECREMENT_ITEM",
        payload: id,
    });
}

//upload the data

useEffect(() => {
    dispatch({
        type:"GET_TOTAL",
    })
    console.log("Awosoeme");

}, [state.item])

    return (  
            <CardContext.Provider value={{ ...state, dispatch, removeItem, clearCart, addItems, decrementItem, Products }}>
                 <ContextCart /> 
                <Home />
                {/* <Shoping /> */}
            </CardContext.Provider>  
    )
}

export default Card;
