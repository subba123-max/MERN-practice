import React,{useState,useEffect,useContext} from "react";
import { Link } from "react-router-dom";
import { context } from "../App";
import axios from 'axios'
const HomeComponent = () => {
    const user=useContext(context)
    console.log(user.name) 
    useEffect(()=>{
      axios.get(`http://localhost:4000`,).then((res)=>{console.log("res",res.data.msg)})
    },[])

  return (
    <>
  
      <h4 className="text-primary">UserName:{user.name}</h4>
      <h4 className="text-danger">Token:{user.token}</h4>
    </>
  );
};
export default HomeComponent;
