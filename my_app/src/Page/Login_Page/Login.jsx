import React from 'react'

// background image import 
import Login_bg1 from "../../Assets/Image/login_bg_1.gif"
import Login_bg2 from "../../Assets/Image/login_bg_2.gif"
import Login_bg3 from "../../Assets/Image/login_bg_3.gif"
import Navbar from '../../Component/Navbar/Navbar'


// css import 
import "./Login.css"


function Login() {
  return (
	<div>
    <Navbar />
    <div className="Main_Body">
      <div className="Left_Side">
        <img src={Login_bg2} alt="" />
      </div>
      <div className="Right_Side ">
        <h3>Login</h3>
        <label>User Name or Email Address</label>
        <input type="email" className="form-control" placeholder='User Nmae or Email Address' />
        <br />
        <label>Password</label>
        <input type="password" className="form-control" placeholder='Password' />
        <button className='btn btn-dark '>Login</button>
      </div>
    </div>



  </div>
  )
}

export default Login