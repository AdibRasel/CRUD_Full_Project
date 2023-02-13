import React from 'react'
import Navbar from "../../Component/Navbar/Navbar.jsx"

import "./Todo.css"

function ToDo() {
  return (
    <div>
        <Navbar />
    




      <div>
          <p className='CreateTitle'>ToDo Add</p> 
          <div className="Form">
            <div className="Item">
              <label htmlFor="">Product Name</label> <br />
              <input  type="text" placeholder='Product Name' />
            </div>
            <div className="Item">
              <label htmlFor="">Product Code</label> <br />
              <input  type="text" placeholder='Product Code' />
            </div>
            <div className="Item">
              <label htmlFor="">Product Image</label> <br />
              <input  type="text" placeholder='Product Image' />
            </div>
            <div className="Item">
              <label htmlFor="">Price</label> <br />
              <input  type="text" placeholder='Price' />
            </div>
            <div className="Item">
              <label htmlFor="">Qty</label> <br />
              <input  type="text" placeholder='Qty' />
            </div>
            <div className="Item">
              <label htmlFor="">Total Price</label> <br />
              <input  type="text" placeholder='Total Price'  />
            </div>
            <div className="Item">
              <div className="Button">
                <button  >Submit</button>
                {/* <button onClick={showToastMessage} >Submit</button> */}
              </div>
            </div>
          </div>

      </div>



    </div>
  )
}

export default ToDo