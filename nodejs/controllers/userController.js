const express = require("express");
const fs = require("fs");
const path = require("path");
const UserModel = require("../models/users");
const bcrypt = require("bcryptjs");
const response = require("../helpers/helpers");
const jwt = require("jsonwebtoken");
const { config } = require("dotenv");

exports.sample = async (req, res) => {
  try {
    const results = await UserModel.find({}, { __v: 0, password: 0 });
    // return res.status(200).json("success");
    return response.success(res, results);
  } catch (err) {
    throw err;
  }
};

exports.register = [
  async (req, res) => {
    try {
      const user = new UserModel({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        role:req.body.role 
      });
      const result = await user.save();
      // res.send(result)
      console.log(result);
      response.success(res, result);
    } catch (err) {
      throw err;
    }
  },
];

exports.login = [
  async (req, res) => {
    UserModel.findOne({ email: req.body.email }).then((user) => {
      if (!user) {
        response.fail(res, `no user with this data${req.body.email}`);
      } else {
        console.log("**", user);

        bcrypt.compare(req.body.password, user.password, (err, match) => {
          if (err) {
            return response.fail(res, err);
          } else if (match) {
            const token = jwt.sign(user.toJSON(), "123hgdhd3321owb");
            // console.log("token,", token);
            return response.success(res, {  name: user.name ,role:user.role,token: token,});
          } else {
            return response.fail(res, "password not matched");
          }
        });
      }
    });
  },
];

exports.update = [
  (req, res) => {
    UserModel.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
        },
      }
    ).then((result) => {
      console.log("res", result);
      return response.success(res, "updated!!");
    });
  },
];
