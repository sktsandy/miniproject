export const reducer = (state, action) =>{
const { shopingCart, qty, totalPrice } = state;

    if(action.type === "REMOVE_ITEM"){
        alert("Are you Sure you want to delete this");
        return{
            ...state,
               shopingCart: shopingCart.filter((currElm) => {
                return currElm.id != action.payload;
            })
        }
    }

    if(action.type === "CLEAR_ALL"){
        return{...state, shopingCart: [] };
    }


    if(action.type === "ADD_ITEM"){
        let updatedCart = shopingCart.map((curElm) =>{
            if(curElm.id === action.payload){
                return{...curElm, quantity: curElm.quantity + 1 }
            }

            return curElm;    
        });
        return {...state, updatedCart };
    }

    if(action.type === "DECREMENT_ITEM"){
        let updatedCart = state.item.map((curElm) =>{
            if(curElm.id === action.payload){
                return {...curElm, quantity: curElm.quantity - 1 }
            }
            return curElm;
        }).filter((curElm) =>{
            return curElm.quantity != 0
        });
    
        return {...state, item: updatedCart };

    }

// if(action.type === "GET_TOTAL"){
//     let { totalItem, totalAmount } = state.item.reduce((accum, currVal) => {
//         let { quantity, price } = currVal;
//             let updatedTotalAmount = price * quantity;
//             accum.totalAmount += updatedTotalAmount;

//         accum.totalItem += quantity;
//         return accum;
//     }, {
//         totalItem: 0,
//         totalAmount: 0,
//     });

//     return { ...state, totalItem , totalAmount };
// }


    let products;
    let index;
    let updatedPrice;
    let updatedQty;

    switch (action.type) {
        case 'ADD_TO_CART':
            const check = shopingCart.find(products => products.id === action.id)
                if(check){
                    return state;
                } else{
                    products = action.products;
                    products ['qty'] = 1;
                    updatedQty = qty + 1;
                    updatedPrice = totalPrice + products.price;

                    return {shopingCart: [products, ...shopingCart], totalPrice: updatedPrice, qty: updatedQty }

                }

        break;

        default:
            return state;
    }


}