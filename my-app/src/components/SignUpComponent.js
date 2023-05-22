import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import urls from "../constants/apiendpoints";


const SignUpComponent = () => {
    const navigate = useNavigate();
  const [data, setData] = useState();
  const handleChange=(event)=>{
    setData({
        ...data,
        [event.target.name]: event.target.value,
      });
  }

  const handleSubmit=(evt)=>{
    evt.preventDefault(); 
    console.log("data:",data)
    axios.post(urls.register,{"name":data?.name,"email":data?.email,"password":data?.password}).then(res=>{
      console.log(res)
      if(res.data.status == "200")navigate('/login')
    })
  }
  return (

    <>
      {" "}
      <form method="POST" style={{width: '50%', marginLeft: '40%'}}>
        <div className="row mb-3">
          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
            UserName
          </label>
          <div className="col-sm-4">
            <input
              type="text"
              className="form-control"
              name="name"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="email" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-4">
            <input
              type="text"
              className="form-control"
              name="email"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
            Password
          </label>
          <div className="col-sm-4">
            <input
              type="password"
              className="form-control"
              name="password"
              onChange={handleChange}
            />
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Sign Up
        </button>
      </form>
    </>
  );
};
export default SignUpComponent;
