// const path = require(`path`);
const cors = require("cors")
const express = require(`express`);
const app = express();

// app.set('view engine','hbs');
// app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());

app.get("/", (req, res)=>{
    return res.status(200).send({message : "Welcome to eCommerce API", status:true});
})

const authRouters = require("./routes/auth.route.js")
app.use("/auth", authRouters)

const userRouters = require("./routes/user.route.js")
app.use("/users", userRouters)

module.exports = app;