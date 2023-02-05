import React from 'react'
import axios from "axios";
import { useState,useEffect } from 'react';
import {Link} from "react-router-dom"


const ViewEmployeedata = () => {
    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
      axios.get(`http://localhost:3001/api/employeelist`)
              .then((response) => {
                console.log(response.data)
                  setAPIData(response.data);
                  
              })
         
    }, [])
  return  (
<div>
      <div>
        <nav class="navbar navbar-expand-lg  bg-secondary navbar-dark">
          <div class="container-fluid">
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav  ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link class="nav-link" to="/">
                    Back Home
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div>
        </div>
        
        <div className="container bg-dark mt-5">
      <div className="card">
        <div className='card-header'>
        <div>
        <h2 className='text-primary'>EMPLOYEE DETAILS</h2>
      </div>
        </div>
        <div className="card-body">
            
          <table className="table table-bordered">
            <thead className="bg-dark text-white">
              <tr>
               
                <td>Name</td>
                <td>Location</td>
                <td>Position</td>
                <td>Salary</td>
               
                
              </tr>
            </thead>
            <tbody>
            {
            APIData.map((data) => {
   return (
    <tr key={data.id}>

        <td>{data.name}</td>
        <td>{data.location}</td>
        <td>{data.position}</td>
        <td>{data.salary}</td>
        
    </tr>
       )})}

            </tbody>
          </table>
        </div>
      </div>
    </div>
    <footer>
    
  </footer>
    </div>
  )
}
export default ViewEmployeedata