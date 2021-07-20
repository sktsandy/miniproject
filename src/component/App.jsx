import React, { useState, useEffect } from 'react';
import Header from './Header';
import CreateNote from './CreateNote';
import Note from './Note';
import '../css/style.css';

///get note to localStorge 

const getlocalnote = () =>{
    let note = localStorage.getItem('note');
    console.log(note)

    if(note){
        return JSON.parse(localStorage.getItem('note'));
    }
    else{
       return [];
    }
}

const App = () => {
const [addItems, setAddItems] = useState(getlocalnote());

const addNote = (note) => {
    setAddItems([...addItems, note])
};


//set note in localStorage 
useEffect(() => {
    localStorage.setItem('note', JSON.stringify(addItems));
}, [addItems])

const onDelete = (id) =>{
    setAddItems((olddata) =>
        olddata.filter((currdata, indx) =>{
            return indx != id;
        })
    ); 
};

    return(
        <>
                <Header />
                <CreateNote
                passNote = {addNote}
                />

               {
               addItems.map((val, index) =>{
                   return (
                    <Note 
                        key = {index}
                        id = {index}
                        title = {val.title}
                        content ={val.content}
                        deleteItem = {onDelete}
                    />
                   )
               })
               }
        </>
    )
}

 
export default App;



