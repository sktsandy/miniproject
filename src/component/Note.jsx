import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import Tooltip from '@material-ui/core/Tooltip';


const Note = (props) => {


const deleteNote = () =>{
    props.deleteItem(props.id);
};
    return(
        <>
            <div className="note">
                <h2>  {props.title} </h2>
                <p>  {props.content} </p>
            <Tooltip title="Delete">
                <button type="button" onClick={deleteNote}> 
                   <DeleteIcon /> 
                 </button>
            </Tooltip>
            </div>

        </>
    )
}

 
export default Note;