import React from 'react'
import Navbar from "../../Component/Navbar/Navbar.jsx"

import "./Registration.css"

function Registration() {
  return (
    <div>
        <Navbar />

        <div className="Registration">
        <h3>Registration</h3>

            <label>Name </label>
            <input type="text" placeholder='Name' className='form-control' />
            
            <div className="Inline_Item">
                <div className="Input_Item">
                    <label>Father Name </label>
                    <input type="text" placeholder='Father Name' className='form-control ' />
                </div>

                <div className="Input_Item">
                    <label>Mother Name </label>
                    <input type="text" placeholder='Mother Name' className='form-control' />
                </div>
            </div>
            
            <label>Address </label>
            <input type="text" placeholder='Address' className='form-control' />
            
            <div className="Inline_Item">
                <div className="Input_Item">
                    <label>Mobile Number </label>
                    <input type="text" placeholder='Mobile Number' className='form-control' />
                </div>
                
                <div className="Input_Item">
                    <label>Email </label>
                    <input type="email" placeholder='Email' className='form-control' />
                </div>
            </div>
            
            <label>Image </label>
            <input type="text" placeholder='Image' className='form-control' />
            
            <div className="Inline_Item">
                <div className="Input_Item">
                    <label>Password </label>
                    <input type="password" placeholder='Password' className='form-control' />
                </div>

                <div className="Input_Item">
                    <label>Confirm Password</label>
                    <input type="password" placeholder='Confirm Password' className='form-control' />
                </div>
            </div>
            

            <button className='btn btn-dark'>Submit</button>
        </div>






    </div>
  )
}

export default Registration