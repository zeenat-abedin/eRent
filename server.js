const experss = require("express");
const cors = require("cors");

const app = experss();

const sequelize = require("./config/db");

//seller product database
const productSequelize = require('./config/productsDb')
const userRouter = require("./routes/users");
const productsRouter = require("./routes/createProducts")
const fetchProducts = require("./routes/getProducts")
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/auth", userRouter);
//create products
app.use("/createProduct", productsRouter)
//get products
app.use("/Products", fetchProducts)
// DB Connection
productSequelize
  .sync()
  .then(function (err) {
    console.log("Connection has been established successfully for seller DB.");
  })
  .catch(function (err) {
    console.log("Unable to connect to the seller database:", err.message);
  });
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
