import React, { useState, useEffect } from 'react';
import '../css/todo.css';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import AddIcon from '@material-ui/icons/Add';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';


//to get data from localSorage

const getLocalItem = () =>{
    let list = localStorage.getItem('lists');

    if(list){
        return JSON.parse(localStorage.getItem('lists'));
    }
    else{
        return [];
    }
}

const TodoApp = () => {
    const [input, setInput] = useState();
    const [items, setItems] = useState(getLocalItem());

    const addItem = () =>{
        if(!input){

         }
        else{
            setItems([...items, input]);
            setInput('');
        } }


    // Add items localStorage 
        useEffect(() => {
          localStorage.setItem('lists', JSON.stringify(items))
        }, [items]);


        {/*** delete items by filter method */}
    const deleteItem = (id) =>{
        const updateItem = items.filter((elm, index) =>{
            return index != id;
        })

        setItems(updateItem);
    }


 {/*** main wrapper of todolist */}
    return (
        <>
        <div className="todoapp_main_wrapper">
            <div className="todoapp_inner_wrap">
                <NoteAddIcon />
                <p> Add Your List Here ✌️</p> 

                <div className="todo_input">
                    <input type="text" placeholder="✍️ Add Items.."
                    value={input}
                    onChange={(e) =>{
                        setInput(e.target.value);
                    }} />
                    <div className="add_icon">
                    <   AddIcon onClick={addItem} />
                    </div>
                   
                </div>
                


                {/**** get all data by map method here */}
            {
                items.map((currElm, index) =>{
                    return(
                        <div className="todo_list_data" key={index}>
                        <h5> {currElm} </h5>
                        <div className="delete_icon">
                            <DeleteForeverIcon onClick={ () => deleteItem(index)} />
                         </div>
                  </div>
                    )
                })
            }


              {/*** clear all items  */}
                <button onClick={(() =>
                    setItems([])
                    )}> Clear All </button>

            </div>
        </div>    
        </>
    )
}

export default TodoApp;
