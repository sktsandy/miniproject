import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';


const Count = () =>{
    const [count, setCount] = useState(0);

    const Increment = () =>{
        setCount(count + 1); 
    }


    const Decrement = () =>{
        if(count > 0) {
        setCount(count -1);
        }
    else{
        alert("Sorry Zero Limmet reched");
        setCount(0)
    }
    }

    return (
        <>
            <div className="main_count_div">
                <div className="center_div">
                    <br />  <br /> <br />  <br/ >
                    <h1> {count} </h1>
                <div className="count_btn">
                <Tooltip title="Add">
                    <Button onClick={Increment} className="btn_green"> <AddIcon /> </Button>
                </Tooltip>  

                <Tooltip title="Delete">
                    <Button onClick={Decrement} className="btn_red"> <DeleteIcon /> </Button>
                </Tooltip>
                </div>
                </div>


            </div>
        </>
    )
}



export default Count;