import React, { useRef } from 'react'

// background image import 
import Login_bg1 from "../../Assets/Image/login_bg_1.gif"
import Login_bg2 from "../../Assets/Image/login_bg_2.gif"
import Login_bg3 from "../../Assets/Image/login_bg_3.gif"
import Navbar from '../../Component/Navbar/Navbar'


// css import 
import "./Login.css"

// Login Configation 
import { LoginProfile } from '../../APIService/Registration'


function Login() {

  let  UserName, Password, Token = useRef()

  const Submit =()=>{
    
    let UserNameFind = UserName.value;
    let PasswordFind = Password.value;
    let UserToken = Token.value;

    LoginProfile(UserNameFind, PasswordFind, UserToken)
    .then((Result)=>{
        if(Result === true){
            alert("Login Success", LoginProfile())
        }else{
          console.log("Login Faild")
            alert("Login Fail")
        }
    })


  }

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
        <input ref={(input)=>UserName=input} type="email" className="form-control" placeholder='User Nmae or Email Address' />
        <br />
        <label>Password</label>
        <input ref={(input)=>Password=input} type="password" className="form-control" placeholder='Password' />
        <br />
        <label>Token</label>
        <input ref={(input)=>Token=input} type="text" className="form-control" placeholder='Token' />
        <button onClick={Submit} className='btn btn-dark '>Login</button>
      </div>
    </div>



  </div>
  )
}

export default Login