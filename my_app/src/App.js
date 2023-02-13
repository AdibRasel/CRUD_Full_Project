// import "bootstrap"
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, } from "react-router-dom";


// import pages 
import Home from "./Page/Home_Page/Home";
import Login from "./Page/Login_Page/Login";
import Profile from "./Page/Profile_Page/Profile";
import Registration from "./Page/Registration/Registration";
import Student from "./Page/Student_List/Student";
import ToDo from "./Page/ToDo_List/ToDo";


function App() {


  const router = createBrowserRouter([
    {path: "/", element:<Home/>},
    {path: "/Login", element: <Login/>},
    {path: "/Registration", element: <Registration/>},
    {path: "/Profile", element: <Profile />},
    {path: "/ToDo", element: <ToDo />},
    {path: "/Student", element: <Student />},
  ]);



  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}


export default App;