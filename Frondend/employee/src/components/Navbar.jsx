import React from 'react'
import { Outlet, Link } from "react-router-dom";
import logo from "./logo.png"

const Navbar = () => {
  return(
    <div>
    <nav class="navbar navbar-expand-lg  bg-secondary navbar-dark">
    <div class="container-fluid">

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
      <img src={logo} className="logoemp" alt="logo-image" height={70}/>
      
      </div>
    </div>
  </nav>
      <Outlet />
      
     
    </div>
  );
}

export default Navbar