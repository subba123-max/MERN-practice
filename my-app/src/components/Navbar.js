import React from "react";
import { Link } from "react-router-dom";
 
const Navbar=()=>{
    return(<>    <nav className="navbar navbar-expand-lg bg-body-tertiary ">
    <div className="container-fluid">
      {/* <a className="navbar-brand" href="#">
       
      </a> */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
        <div className="navbar-nav " >
          <Link to={'/'} className="nav-link active" aria-current="page">
            Home
          </Link>
          <Link className="nav-link"to={'login'}>
            Login
          </Link>
          <Link className="nav-link" to={'signup'}>
            SignUP
          </Link>
          <Link className="nav-link" to={'/about'}>
            About
          </Link>
        </div>
      </div>
    </div>
  </nav></>)
}
export default Navbar