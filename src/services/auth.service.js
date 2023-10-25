const user = require("../models/user.model");
const jwt = require("jsonwebtoken");

const loginService = (email) => user.findOne({email});

const generateToken =  (userId) =>  jwt.sign({ id: userId }, process.env.SECRET, { expiresIn: 86400 });

module.exports = {loginService, generateToken};