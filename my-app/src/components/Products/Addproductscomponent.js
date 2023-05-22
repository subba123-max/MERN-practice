import React from "react";
import urls from "../../constants/apiendpoints"
import axios from "axios";

const Addproductscomponent = () => {
  const [data, setData] = React.useState([]);
  const [success, setSuccess] = React.useState(false);

  const handleSubmit = (evt) => {
    evt.preventDefault()
    // console.log(urls.addProduct)
    // console.log(">>>", data);
    axios.post(urls.addProduct,data).then(res=>{
      console.log("res:",res.data.status)
      if(res.data.status == "201"){
        setSuccess(true)
      }
    })

  };
  const handleChange = (event) => {
    // console.log(event.target.name, ":", event.target.value);
    if (event.target.name == "image") {
      let reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = () => {
        // console.log(reader.result);
        setData({ ...data, [event.target.name]: reader.result });
      };
      reader.onerror = (err) => {
        console.log(err);
      };
    } else {
      setData({ ...data, [event.target.name]: event.target.value });
    }
  };
  return (
    <>
     {success&&(
          <div
            className="alert alert-primary text-center"
            role="alert"
            style={{ width: "50%", marginLeft: "30%" }}
          >
            {`${data.title} product added successfully`}
          </div>
        )}
      <div className="d-flex justify-content-center">
       
        <form onSubmit={handleSubmit}>
          <h1 className="text-primary "> Add Product</h1>
          <div className="">
            <label>Title</label>
            <input
              className="form-control"
              type="text"
              name="title"
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Price</label>
            <input
              className="form-control"
              type="text"
              name="price"
              onChange={handleChange}
            />
          </div>
          <div>
            <label>InStock</label>
          </div>
          <div className="" style={{ display: "flex" }}>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="InStock"
                id="flexRadioDefault1"
                value={"Available"}
                onChange={handleChange}
              />
              <label className="form-check-label" for="flexRadioDefault1">
                Available
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="InStock"
                id="flexRadioDefault2"
                onChange={handleChange}
                value={"Not Available"}
              />
              <label className="form-check-label" for="flexRadioDefault2">
                Not Available
              </label>
            </div>
          </div>
          <div>
            <label for="formFile" className="form-label">
              Add Image
            </label>
            <input
              className="form-control"
              type="file"
              id="formFile"
              name="image"
              accept="image/*"
              onChange={handleChange}
            />
          </div>
          <div style={{marginTop:"10px"}}>
            <button className="btn btn-primary">Add Product</button>
          </div>
        </form>
      </div>
    </>
  );
};
export default Addproductscomponent;
