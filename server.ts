const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended: true} ));
app.use(express.static(path.join(__dirname, '/client/dist')));

const port = 1337;

app.listen(port, () => {
  console.log('app is listening on port 1337');
})