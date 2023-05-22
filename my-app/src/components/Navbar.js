import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  let userName = localStorage.getItem("userName");
  let token = localStorage.getItem("userName");
  let navigate = useNavigate();
  const handleLogout = (event) => {
    event.preventDefault()
    console.log("logout")
    localStorage.clear();
    navigate("/login");
  };
  return (
    <>
      {" "}
      <nav
        className="navbar navbar-expand-lg  bg-primary "
        style={{ marginBottom: "15px" }}
      >
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
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav ">
              <Link to={"/"} className="nav-link active" aria-current="page">
                Home
              </Link>

              <Link className="nav-link" to={"/about"}>
                About
              </Link>
              {userName && token ? (
                <Link className="nav-link" onClick={handleLogout}>
                  Logout
                </Link>
              ) : (
                <>
                  <Link className="nav-link" to={"login"}>
                    Login
                  </Link>
                  <Link className="nav-link" to={"signup"}>
                    SignUP
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
