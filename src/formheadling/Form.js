import React, { useState, useEffect} from 'react';
import '../css/form.css';

const Form = () => {

   const [fullName, setFullName] = useState({
        fname:'',
        lname:'',
        email:'',
        phone:'',
    });

    const onSubmit = (event) => {
        event.preventDefault();
        alert(`your name is ${fullName.fname} your last name is ${fullName.lname} 
        your email ${fullName.email}
        your phone no. is ${fullName.phone}
        `);

    setFullName({         
        fname:'',
        lname:'',
        email:'',
        phone:'',
    });

    }

    const inputEvent = (event) =>{
      // const value = event.target.value;
      // const name = event.target.name;

      const {name, value} = event.target;
      setFullName({...fullName, [name]:value})

       // console.log(prevent)

     /** if(name==="fname"){
        return{
            fname:value,
            lname:prevent.lname,
        };
       }
       else if (name==="lname"){
        return{
            fname:prevent.fname,
            lname:value,
        };
       } 
       
    }  */

    return (
        <>
            <div className="form_wrapper">
                <form onSubmit={onSubmit}>
                    <input type="text" 
                    placeholder="Enter your name" 
                    value={fullName.fname}
                    name='fname'
                   onChange={inputEvent}/> 
                    <br />

                    <input type="text" 
                    placeholder="Enter Last name" 
                    value={fullName.lname}
                    name='lname'
                   onChange={inputEvent}/> <br />

                    <input type="email" 
                    placeholder="Enter Email" 
                    value={fullName.email}
                    name='email'
                   onChange={inputEvent}/> <br />

                    <input type="phone" 
                    placeholder="Enter Phone no." 
                    value={fullName.phone}
                    name='phone'
                   onChange={inputEvent}/> <br />

                    <input type="submit" />
                </form>
            </div>
        </>
    );



}

export default Form;




    /***      return(
    <>
        <h1> hello coder gyan</h1>

       {!data ? <p> data not found </p> :

       
           data.map((products, indx) => {
                return (
                    <>
                    <h2> {products.name} </h2>
                    <div>
                        <img style={{width:"200px", height:"200px"}} src={products.image} alt="img" />
                        <p> {products.price} </p>
                        <p> {products.size} </p>
                        <p> {products.createdAt} </p>
                        <b> {products._id} </b>
                    </div>
                    </>
                );

           })
       
}
    </>
); 




     const [data, setData ] = useState();

  useEffect(() => {

   const fetchApi = async () => {
      const url = (`/api/products`) 
       const res = await fetch(url);
       const resjson = await res.json();

      setData(resjson);
      console.log(resjson);
   }

     fetchApi();
  }, [])

  */

