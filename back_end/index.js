const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./Service/config');


//using dependancy 
const app = express()
app.use(cors());
app.use(bodyParser.json());


//database connection
config.connect((err) => {
  if (!!err) {
    console.log(err);
  }
  else {
    console.log('Connected to dataBase');
  }
});

const loginRouter = require('./Path/login');
app.use("/auth",loginRouter);

app.listen(2000)