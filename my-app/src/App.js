import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route, redirect } from "react-router-dom";
import HomeComponent from "./components/HomeComponent";
import LoginComponent from "./components/LoginComponent";
import SignUpComponent from "./components/SignUpComponent";
import AboutComponent from "./components/AboutComponent";
import Navbar from "./components/Navbar";
export const context = React.createContext();
function App() {
  const data = {
    name: "ram",
    token: "232ddhcbjnjk",
  };
  return (
    <>
      {/* <context.Provider value={data}> */}
        <BrowserRouter>
          {/* <HomeComponent /> */}
          <Navbar /> 
          <Routes>
            <Route path="/" Component={HomeComponent}>
              {" "}
            </Route>
            <Route path="/login" Component={LoginComponent}></Route>
            <Route path="/signup" Component={SignUpComponent}></Route>
            <Route path="/about" Component={AboutComponent}></Route>
          </Routes>
        </BrowserRouter>
      {/* </context.Provider> */}
    </>
  );
}

export default App;
