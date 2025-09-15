const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const config = require('../Service/config');


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'Images/');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});
const upload = multer({ storage: storage });

router.post('/upload', upload.array('images', 5), (req, res) => {
  if (!req.files || req.files.length === 0) {
    return res.status(400).send('No files uploaded.');
  }

  const { type, pageName, position } = req.body;

  const queryString1 = `INSERT INTO website_banners
      (type, page_name, img_url, img_name, position, is_active, start_date, end_date)
    VALUES ?`;
  const values = [];

  req.files.forEach((file, index) => {
    const tempArr = [
      type[index],
      pageName[index],
      `http://localhost:2000/Images/${file.filename}`,
      file.originalname,
      position[index] || 0,
      1,
      null,
      null]

    values.push(tempArr)
  });
  config.query(queryString1, [values], (error, results) => {
    if (error) {
      return res.status(500).send('Database insert failed');
    }
    res.status(200).json({ data: results.affectedRows });
  });

})

router.get('/lists', upload.array('images', 5), (req, res) => {
 
  config.query(`Select * from website_banners`, (error, results) => {
    if (error) {
      console.error( error);
      return res.status(500);
    }
    res.status(200).json({ data: results });
  });

})


module.exports = router;



