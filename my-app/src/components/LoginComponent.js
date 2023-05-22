import React, { useReducer, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { context } from "../App";
import urls from "../constants/apiendpoints";
const LoginComponent = () => {
  const navigate = useNavigate();
  const intialState = { count: 0 };
  // const [state, dispatch] = useReducer(reducer, intialState);
  const [success, setSuccess] = useState(false);
  const [data, setData] = useState();
  const [details, setDetails] = useState();
  // function reducer(state, action) {
  //   switch (action.type) {
  //     case "increment":
  //       return { count: state.count + 1 };
  //     case "decrement":
  //       return { count: state.count - 1 };
  //     default:
  //       throw new Error();
  //   }
  // }
  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log("data:", data);
    axios
      .post(urls.login, {
        email: data?.email,
        password: data?.password,
      })
      .then((res) => {
        console.log(res.data);
        const role = res.data.msg.role;
        localStorage.setItem("token", res.data.msg.token);
        localStorage.setItem("userName", res.data.msg.name);
        if (res.data.status == "201") {
          setDetails(res.data.msg);
          setSuccess(true);
          setTimeout(() => {
            if (role == "admin") {
              console.log(`role${role}`)
              navigate("/addproduct")
            } else {
              navigate("/");
            }
          }, 500);
        }
      });
  };
  return (
    <>
      <context.Provider value={details}>
        {success && (
          <div
            className="alert alert-primary text-center"
            role="alert"
            style={{ width: "50%", marginLeft: "30%" }}
          >
            login success!!
          </div>
        )}
        <form
          method="POST"
          style={{ width: "50%", marginLeft: "40%" }}
          onSubmit={handleSubmit}
        >
          <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
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
            style={{ textAlign: "center" }}
            className="btn btn-primary"
          >
            Sign in
          </button>
        </form>
      </context.Provider>
    </>
  );
};
export default LoginComponent;
