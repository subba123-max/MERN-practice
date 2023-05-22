const mongoose = require("mongoose");
const express = require("express");
const bcrypt = require("bcryptjs");
const user = new mongoose.Schema({
  name: { type: String },
  email: { type: String, unique: true },
  password: { type: String },
  role:{type:"string",default:"user"}
  
},{timestamps:true});

// user.pre("save", function save(next) {
//     const user = this;
//     if (!user.isModified("password")) { return next(); }
//     bcrypt.genSalt(10, (err, salt) => {
//         if (err) { return next(err); }
//         bcrypt.hash(user.password, salt, (err, hash) => {
//             if (err) { return next(err); }
//             user.password = hash;
//             next();
//         });
//     });
// });
user.pre("save",  function save(next) {
  const user = this;
  // console.log("user", user);
  bcrypt.genSalt(10, (err, salt) => {
    if (err) throw err;
    // console.log(salt);
    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) throw err;
      // console.log("hash", hash);
      user.password = hash;
      next();
    });
  });
});

user.pre("findOneAndUpdate",  function findOneAndUpdate(next) {
    const user = this;
    console.log("user***", user._update['$set'].password);
    bcrypt.genSalt(10, (err, salt) => {
      if (err) throw err;
      // console.log(salt);
      bcrypt.hash(user._update['$set'].password, salt, (err, hash) => {
        if (err) throw err;
        // console.log("hash", hash);
        user._update['$set'].password = hash;
        next();
      });
    });
  });
module.exports = mongoose.model("users", user);
