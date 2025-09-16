const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./Service/config');
const path = require('path');

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


// ADMIN LOGIN
const loginRouter = require('./Path/login');
app.use("/auth", loginRouter);

//AUTH CHECK
const authCheck = require('./Service/authCheck');
app.get("/auth-check", authCheck, (req, res) => {
  res.status(200).json({ auth: true });
})

//USER INFO
const userRouter = require('./Path/userDetails');
app.use("/user", authCheck, userRouter);

//DATA UPLOAD
const imgsRouter = require('./Path/imgSettings');
app.use('/img', authCheck, imgsRouter);


//GENERAL
app.use('/Images', express.static(path.join(__dirname, 'Images')));

const bannerRouter = require('./GeneralPath/BannerPath');
app.use('/banner', bannerRouter);

app.listen(2000)