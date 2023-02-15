import React, { useEffect, useState } from 'react'
import { ProfileRead } from '../../APIService/Registration.js'
import Navbar from "../../Component/Navbar/Navbar.jsx"

import "./Profile.css"

function Profile() {
  
  let [ProfileList, SetProfile] = useState([]);

  useEffect(()=>{
    ProfileRead().then((Response)=>{
      SetProfile(Response)
    })
  },[])

  if(ProfileList.length < 0){
    return(
      <div className="not">
        <h1>Not Profile Found</h1>
      </div>
    )
  }
  else{
   
    return (
      <div>
          <Navbar />

          {console.log(ProfileList)}



          <div className="Profile">
  
              <table className='table table-bordered table-hover'>
                <thead className='thead-light'>
                  <tr>
                    <th>Name</th>
                    <th>Father Name</th>
                    <th>Mother Name</th>
                    <th>Address</th>
                    <th>Email</th>
                    <th>Image</th>
                    <th>Password</th>
                  </tr>
                </thead>
                <tbody>
                  {/* {
                    ProfileList["Data"].map((item, i)=>{
                      return(
                        <tr>
                          <td>{item.Name}</td>
                          <td>{item.FatherName}</td>
                          <td>{item.MotherName}</td>
                          <td>{item.Address}</td>
                          <td>{item.Email}</td>
                          <td><img src={item.Image} alt="Profile Image" /></td>
                          <td>{item.Password}</td>
                        </tr>
                       )
                    })
                  } */}
                  

                </tbody>
              </table>
  
  
  
              <button className='btn btn-dark'>Update</button>
  
          </div>
  
  
      </div>
    )
  }


}

export default Profile