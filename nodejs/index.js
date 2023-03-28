const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors=require('cors')
const helpers=require('./helpers/helpers')


dotenv.config({ path: ".env" });
app.use(cors({origin:"http://localhost:3000"}),) //cors policy
const userRoute=require("./routes/userRoute")
const url = process.env.MONGODB_URL;
console.log("url:", url);
// mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connect(url, {  });
let con = mongoose.connection;
con.on("open", () => {
  console.log("db connected");

  console.log("name:",helpers.data)

});
app.use(express.json())
app.use('/',userRoute)

// 
app.use(express.urlencoded({extended:false}))
app.listen(4000, (err) => {
  if (err) {
    throw err;
  } else {
    console.log("server running in 4000");
  }
});
