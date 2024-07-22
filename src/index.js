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
app.use("/api/users", userRouters)

const productRouter = require("./routes/product.route.js")
app.use("/api/products", productRouter)

const adminProductRouter = require("./routes/adminProduct.route.js")
app.use("/api/admin/products", adminProductRouter)

const reviewRouters = require("./routes/review.route.js")
app.use("/api/reviews", reviewRouters)

const ratingRouters = require("./routes/rating.route.js")
app.use("/api/ratings", ratingRouters)

module.exports = app;