require('dotenv').config();
const express = require("express");
const app = express();
const mongoose = require('mongoose');
const cors = require('cors')
const bodyParser = require('body-parser')
const apiRoute = require('./Api/route/Route');

const port = 3001;
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors());


app.get('/', (req, res) => {
  res.send("App chay")
})

app.use('/api', apiRoute)

mongoose.connect(process.env.MONGO_URL, {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true
});


app.listen(port, () => {
  console.log("App listening on port " + port)
})
