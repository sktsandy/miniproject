import React from 'react';


function Images(props){
  return(
  <div className="Cards">
    <div className="random_img">
      <img src={props.imgsrc} alt="randomimg1" />
      <div className="card_info">
          <span className="card_category"> {props.name} </span>
          <h2 className="title"> {props.title} </h2>
          <button> View Image </button>
      </div>
    </div>
  </div>
  );
 
}


export default Images;
