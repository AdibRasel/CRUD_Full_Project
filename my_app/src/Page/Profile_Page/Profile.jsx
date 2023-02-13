import React from 'react'
import Navbar from "../../Component/Navbar/Navbar.jsx"

import "./Profile.css"

function Profile() {
  return (
    <div>
        <Navbar />

        <div className="Profile">

            <p>Name :  </p>
            <p>Father Name :  </p>
            <p>Mother Name :  </p>
            <p>Address :  </p>
            <p>Mobile Number :  </p>
            <p>Email Address :  </p>
            <p>Image :  </p>
            <p>Password :  </p>

            <button className='btn btn-dark'>Update</button>

        </div>


    </div>
  )
}

export default Profile