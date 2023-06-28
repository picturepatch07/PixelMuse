const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const v2 = require("cloudinary").v2;
const Post = require("../models/postModel");

const router = require("express").Router();

module.exports = router;
