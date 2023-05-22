import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { context } from "../App";
import axios from "axios";
import urls from "../constants/apiendpoints";
const HomeComponent = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const user = localStorage.getItem("userName");
  useEffect(() => {
    axios.get(urls.getProducts).then((res) => {
      console.log("res", res.data.msg);
      setProducts(res.data.msg);
    });
  }, []);
  const addToCart = (id) => {
    // console.log(id);

  };
const pageRedirect=()=>{
if(user ==null){
  navigate("/login")
}
}
  const buyButton = (id) => {
    return (
      <>
        <button
          className="btn"
          style={{ background: "yellow", alignContent: "center" }}
          onClick={pageRedirect}
        >
          Buy Now{" "}
        </button>
      </>
    );
  };
  const cartButton = (id) => {
    return (
      <>
        <button
          className="btn btn-primary"
          style={{ alignContent: "center" }}
          onClick={() => {
            addToCart(id);
          }}
        >
          Add To Cart
        </button>
      </>
    );
  };
  return (
    <>
      <div className="container">
        <div className="row">
          {products.map((product, index) => {
            return (
              <div className="col col-3 cards" key={index}>
                <img src={product.image} />

                <div className="card-body" style={{ marginTop: "10px" }}>
                  <h5 className="card-title text-center">{product?.title}</h5>
                  <span className="text-center text-primary">
                    {" "}
                    $ {product?.price}
                  </span>
                </div>
                <div>
                  {!user ? buyButton(product._id) : cartButton(product._id)}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default HomeComponent;
