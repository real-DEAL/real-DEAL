const express = require('express');
const bodyParser= require('body-parser');
require('dotenv').config();
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST;


console.log(PORT);

app.use(express.static(path.join(__dirname, '/client')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(PORT, function() {
  console.log(`listening at http://${HOST}:${PORT}`);
});
