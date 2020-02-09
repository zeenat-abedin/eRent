const experss = require('express')

const app = experss()
const sequelize = require('./config/db')

app.get('/', (req, res) => {
  res.send('hello world')
})


// DB Connection
sequelize.authenticate()
  .then(function (err) {
    console.log('Connection has been established successfully.');
  })
  .catch(function (err) {
    console.log('Unable to connect to the database:', err.message);
  });


// Start Server
const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server Running at ${PORT}`))
