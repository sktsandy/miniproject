import React from 'react';

let greeting = '';

const cssStyle ={
textTransform : 'capitalize',
fontWeight : 'bold',
fontFamily : '"krona One", sans-serif'
};
let curDate = new Date();
curDate = curDate.getHours();

if (curDate >= 1  && curDate < 12){
    greeting = 'Good Morning';
    cssStyle.color = 'green';
}
else if (curDate >=12 && curDate < 19){
      greeting = 'Good Afternoon';
      cssStyle.color = 'orange';
}
else {
  greeting = 'Good Night';
  cssStyle.color = 'black';
}

function Heading(){
    return  <h1> Welcome Sandeep, <span  style={cssStyle}> {greeting} </span> </h1>
}

export default Heading;