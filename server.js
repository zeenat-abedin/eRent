const experss = require("express");
const cors = require("cors");

const app = experss();
const sequelize = require("./config/db");

const userRouter = require("./routes/users");

app.use(cors());
app.use(experss.json());
app.use(experss.urlencoded({ extended: true }));

app.use("/auth", userRouter);

// DB Connection
sequelize
  .sync()
  .then(function(err) {
    console.log("Connection has been established successfully.");
  })
  .catch(function(err) {
    console.log("Unable to connect to the database:", err.message);
  });

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server Running at ${PORT}`));
