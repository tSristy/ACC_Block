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
const authCheck = require('./Service/authCheck');
app.use("/auth",loginRouter);

app.get("/auth-check",authCheck,(req,res)=>{
  res.status(200).json({auth:true});
})

app.listen(2000)