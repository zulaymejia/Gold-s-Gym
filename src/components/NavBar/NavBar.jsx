import React from 'react'
import logoo from "../../images/logoo.png"
import { Link } from 'react-router-dom'
import "./NavBar.css"


function NavBar() {
  return (
    <div>
     <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link to="/">
         <img src={logoo} width="100" alt="Gold's Gym"/>
        </Link>
    <a className="navbar-brand" href="/"> Gold's Gym</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav mx-auto" >
      <li className="nav-item">
          <Link className="nav-link" to="/home" >CONOCENOS</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/plans">PLANES</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/card">SEDES</Link>
        </li>
        <li className="nav-item">
        <button type="button" class="btn btn-outline-success">PERFIL</button>
        </li>   
      </ul>
    </div>             
  </div>
</nav>
    </div>
  )
}

export default NavBar