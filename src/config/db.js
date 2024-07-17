const mongoose = require("mongoose")

// const mongodbURL = "mongodb+srv://rajesharora1845:<password>@cluster0.0dge9cu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const mongodbURL = "mongodb+srv://rajesharora1845:kmTTw7i2iW7RRZIF@cluster0.0dge9cu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const connectDb = ()=>{
    return mongoose.connect(mongodbURL);
}

module.exports = {connectDb}