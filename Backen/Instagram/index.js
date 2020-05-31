require('dotenv').config();
const express = require("express");
const app = express();
const mongoose = require('mongoose');
const cors = require('cors')
const bodyParser = require('body-parser')
const { createProxyMiddleware } = require('http-proxy-middleware');
const apiRoute = require('./Api/route/Route');

const port = 3001;
 
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors());
app.get('/', (req, res) => {
  res.send("App chay")
})

app.use('/api' , apiRoute)
// app.use('/api', createProxyMiddleware({
//   target: 'http://localhost:3001/api/post', //original url
//   changeOrigin: true,
//   //secure: false,
//   onProxyRes: function (proxyRes, req, res) {
//     proxyRes.headers['Access-Control-Allow-Origin'] = '*';
//   }
// }));


mongoose.connect(process.env.MONGO_URL, { useFindAndModify: false, useNewUrlParser: true });

app.listen(port, () => {
  console.log("App listening on port " + port)
})
