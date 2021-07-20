import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import Tooltip from '@material-ui/core/Tooltip';


const CreateNote = (props) => {
    const [expand, setExpand] = useState(false);

const [note, setNote] = useState({
    title: "",
    content: "",
});

const noteEvent = (event) =>{
    //const value = event.target.value;
   // const name = event.target.name;
    const {name, value} = event.target;

    setNote((prevData) => {
        return {
            ...prevData,
            [name]: value,
        };
    });

};

    const addItem = () =>{
        if(!note.title){
          alert("write title first");
        }

       else if(!note.content){
            alert("write note");
        }
        else{
            props.passNote(note);
            setNote({
                    title: "",
                    content: "",
                });
        }

    };


    const expandIt = () =>{
        setExpand(true);
    };

    const backToNoraml = () =>{
        setExpand(false);
    };

    return(
        <>
        <div className="create_note"  onDoubleClick={backToNoraml}>           
            <form>
                {expand?
                <input type="text" placeholder="Title" name="title" onChange={noteEvent}
                 value={note.title} /> 
                :null}  

                <textarea name="content" placeholder="write a note.." onChange={noteEvent} 
                value={note.content}
                onClick={expandIt} >
                </textarea>
        
                {expand?
            <Tooltip title="Add Data">
                <button type="button" onClick={addItem}>
                    <AddIcon />
                </button>
            </Tooltip>
                :null}
               
            </form>

        </div> 
        </>
    )
}

 
export default CreateNote;