const express = require("express");
const cors = require("cors");

const app = express();
const path = require('path')

const sequelize = require("./config/db");

const userRouter = require("./routes/users");
const productsRouter = require("./routes/createProducts");
const fetchProducts = require("./routes/getProducts");
const fetchCities = require("./routes/fetchCities");
const fetchProductsByLocation = require("./routes/getProductsByLocation");
const searchRoute = require("./routes/searchDetails");
const singlePostRoute = require("./routes/singleProduct");
const deleteProduct = require('./routes/deleteProduct')
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/auth", userRouter);
//create products
app.use("/createProduct", productsRouter);
//get products
app.use("/Products", fetchProducts);

//fetch cities
app.use("/cities", fetchCities);
//fetch products by location
app.use("/fetchProducts", fetchProductsByLocation);
//search details
app.use("/search", searchRoute);

app.use("/post", singlePostRoute);
// DB Connection
app.use('/delete', deleteProduct)
sequelize
  .sync()
  .then(function(err) {
    console.log("Connection has been established successfully.");
  })
  .catch(function(err) {
    console.log("Unable to connect to the database:", err.message);
  });

// Server Static assests in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}
// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server Running at ${PORT}`));
