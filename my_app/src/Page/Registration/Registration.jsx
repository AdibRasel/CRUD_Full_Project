import React, { useRef } from 'react'
import Navbar from "../../Component/Navbar/Navbar.jsx";

import "./Registration.css"


// Registration Configation 
import { RegistrationProfile } from '../../APIService/Registration.js';






function Registration() {

    let Name, UserName, FatherName, MotherName, Address, Mobile, Email, Image, Password = useRef();

    const Submit =()=>{
    
        let User_Name = Name.value;
        let User_UserName = UserName.value;
        let User_FatherName = FatherName.value;
        let User_MotherName = MotherName.value;
        let User_Address = Address.value;
        let User_Mobile = Mobile.value;
        let User_Email = Email.value;
        let User_Image = Image.value;
        let User_Password = Password.value;

        RegistrationProfile(User_Name, User_UserName, User_FatherName, User_MotherName, User_Address, User_Mobile, User_Email, User_Image, User_Password)
            .then((Result)=>{
                if(Result === true){
                    alert("Registration Success")
                }else{
                    alert("Registration Fail")
                }
            })


        console.log(User_Name)
    }

    return (
    <div>
        <Navbar />

        <div className="Registration">
        <h3>Registration</h3>

        
        <div className="Inline_Item">
                <div className="Input_Item">
                    <label>Name</label>
                    <input ref={(input)=>Name=input}  type="text" placeholder='Name' className='form-control ' />
                </div>

                <div className="Input_Item">
                    <label>User Name</label>
                    <input ref={(input)=>UserName=input} type="text" placeholder='User Name' className='form-control' />
                </div>
            </div>
            
            <div className="Inline_Item">
                <div className="Input_Item">
                    <label>Father Name </label>
                    <input ref={(input)=>FatherName=input} type="text" placeholder='Father Name' className='form-control ' />
                </div>

                <div className="Input_Item">
                    <label>Mother Name </label>
                    <input ref={(input)=>MotherName=input} type="text" placeholder='Mother Name' className='form-control' />
                </div>
            </div>
            
            <label>Address </label>
            <input ref={(input)=>Address=input} type="text" placeholder='Address' className='form-control' />
            
            <div className="Inline_Item">
                <div className="Input_Item">
                    <label>Mobile Number </label>
                    <input ref={(input)=>Mobile=input} type="text" placeholder='Mobile Number' className='form-control' />
                </div>
                
                <div className="Input_Item">
                    <label>Email </label>
                    <input ref={(input)=>Email=input} type="email" placeholder='Email' className='form-control' />
                </div>
            </div>
            
            <label>Image </label>
            <input ref={(input)=>Image=input} type="text" placeholder='Image' className='form-control' />
            
            <div className="Inline_Item">
                <div className="Input_Item">
                    <label>Password </label>
                    <input ref={(input)=>Password=input} type="password" placeholder='Password' className='form-control' />
                </div>

                <div className="Input_Item">
                    <label>Confirm Password</label>
                    <input  type="password" placeholder='Confirm Password' className='form-control' />
                </div>
            </div>
            

            <button className='btn btn-dark' onClick={Submit} >Submit</button>
        </div>






    </div>
  )
}

export default Registration