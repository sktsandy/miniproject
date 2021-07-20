import React, { useContext } from 'react';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import DeleteIcon from '@material-ui/icons/Delete';
import { CardContext } from './Card';
 
const Items = ({img, title, discription, price, id, quantity }) => {
    const { removeItem, addItems, decrementItem } = useContext(CardContext);
    return (
        <>
            
                    <div className="cart_info">
                        <div className="row">
                            <div className="col-md-3">
                                <img style={{width:"100%", maxHeight:"200px"}} src={img} alt="img" />
                            </div>
                            <div className="col-md-3">
                                <h5 className="pt-5"> { title } </h5>
                                <p> {discription} </p>
                            </div>
                            <div className="col-md-2">
                           <AddIcon onClick={() => addItems(id)} />
                                <input className="mt-5" style={{width:"20px", textAlign:"center"}}
                                 type="text" value={quantity} />
                            <RemoveIcon onClick={() => decrementItem(id)} />
                             </div>
                            <div className="col-md-2">
                                <h4 className="price mt-5"> { price } </h4>
                             </div>

                             <div className="col-md-2">
                                <DeleteIcon className="mt-5" style={{color:"red"}} 
                                onClick={() => removeItem(id)}
                                />
                             </div>                            
                        </div>
                        <hr />

                    </div>
                    
        </>
    )
}

export default Items;
