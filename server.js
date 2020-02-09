const experss = require('express')

const app = experss()

app.get('/', (req, res) => {
  res.send('hello world')
})


// Start Server
const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server Running at ${PORT}`))
