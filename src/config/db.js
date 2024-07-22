require('dotenv').config()
const mongoose = require("mongoose")

const mongodbURL = process.env.mongoURL;
const connectDb = ()=>{
    return mongoose.connect(mongodbURL);
}

module.exports = {connectDb}