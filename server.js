const express = require("express");
const cors = require("cors");

const app = express();

const sequelize = require("./config/db");

const userRouter = require("./routes/users");
const productsRouter = require("./routes/createProducts")
const fetchProducts = require("./routes/getProducts")
const fetchCities = require('./routes/fetchCities')
const fetchProductsByLocation = require('./routes/getProductsByLocation')
const searchRoute = require('./routes/searchDetails')
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/auth", userRouter);
//create products
app.use("/createProduct", productsRouter)
//get products
app.use("/Products", fetchProducts)

//fetch cities
app.use('/cities', fetchCities)
//fetch products by location
app.use('/fetchProducts', fetchProductsByLocation)
//search details
app.use('/search', searchRoute)
// DB Connection
sequelize
  .sync()
  .then(function (err) {
    console.log("Connection has been established successfully.");
  })
  .catch(function (err) {
    console.log("Unable to connect to the database:", err.message);
  });

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server Running at ${PORT}`));
