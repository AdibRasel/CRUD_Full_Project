import React from 'react'

// navbar css 
import "./Navbar.css"

function Navbar() {
  return (
    <div>

        <div className="Menu">
            <div className="Left_Menu">
                <a href="/">Soft Zone</a>
            </div>
            <div className="Right_Menu">
                <a href="/">Home</a>
                <a href="/Profile">Profile</a>
                <a href="/ToDo">ToDo List</a>
                <a href="/Student">Student List</a>
                <a href="/Login">Login</a>
                <a href="/Registration">Registetion</a>
            </div>
        </div>



    </div>
  )
}

export default Navbar