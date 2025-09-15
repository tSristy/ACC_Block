const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./Service/config');


//using dependancy 
const app = express()
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

const authCheck = require('./Service/authCheck');
app.get("/auth-check",authCheck,(req,res)=>{
  res.status(200).json({auth:true});
})

const imgsRouter = require('./Path/imgSettings');
app.use('/img',authCheck, imgsRouter);

// Serve uploaded images (optional)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.listen(2000)