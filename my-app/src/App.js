import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route, redirect } from "react-router-dom";
import HomeComponent from "./components/HomeComponent";
import LoginComponent from "./components/LoginComponent";
import SignUpComponent from "./components/SignUpComponent";
import AboutComponent from "./components/AboutComponent";
import Navbar from "./components/Navbar";
import Addproductscomponent from "./components/Products/Addproductscomponent"
export const context = React.createContext();
function App() {
  
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
            <Route exact path="/login" Component={LoginComponent}></Route>
            <Route exact path="/signup" Component={SignUpComponent}></Route>
            <Route exact path="/about" Component={AboutComponent}></Route>
            <Route  exact path="/addproduct" Component={Addproductscomponent}></Route>
          </Routes>
        </BrowserRouter>
      {/* </context.Provider> */}
    </>
  );
}

export default App;
