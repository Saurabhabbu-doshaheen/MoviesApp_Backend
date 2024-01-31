const express =  require("express");
const registerUser = require("../apis/register/api/register");
const { mainAuthorized } = require("../authorization/auth");
const loginUser = require("../apis/login/api/login");
const { dashboard } = require("../apis/dashboard/api/dashboard");
const userRouter = express.Router();

userRouter.post("/register",registerUser);

userRouter.post("/login" , loginUser);

userRouter.post("/dashboard" , mainAuthorized , dashboard);

module.exports = userRouter;