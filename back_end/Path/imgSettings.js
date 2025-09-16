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

const autoCloseImg = async (type, pageName, date) => {
  const newType = typeof (type) === 'string' ? type : type[0];
  const newPageName = typeof (type) === 'string' ? pageName : pageName[0];

  config.query(`UPDATE website_banners SET img_show='N' WHERE page_name = '${newPageName}'`, (err, res) => {
    if (err) {
      console.log(err)
    }
    return;
  })
}


router.post('/upload', upload.array('images', 5), async (req, res) => {
  if (!req.files || req.files.length === 0) {
    return res.status(400).send('No files uploaded.');
  }

  const { type, pageName, position } = req.body;
  const date = new Date();
  const newType = typeof (type) === 'string' ? type : type[0];
  const newPageName = typeof (type) === 'string' ? pageName : pageName[0];

  await autoCloseImg(type, pageName, date)

  const queryString = `INSERT INTO website_banners
      (type, page_name, img_url, img_name, position, is_active, start_date, end_date)
    VALUES ?`;
  const values = [];

  req.files.forEach((file, index) => {
    const tempArr = [
      newType,
      newPageName,
      `http://localhost:2000/Images/${file.filename}`,
      file.originalname,
      position[index] || 0,
      1,
      date,
      null]

    values.push(tempArr)
  });
  config.query(queryString, [values], (error, results) => {
    if (error) {
      return res.status(500).send('Database insert failed');
    }
    res.status(200).json({ data: results.affectedRows });
  });

})


router.post('/content-upload', upload.single('images'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No files uploaded.');
  }
  const { page_name, content_type, title, initial_text, detail_text, redirect_url, position } = req.body;
  const date = new Date()
  const pathName = `http://localhost:2000/Images/${req.file.filename}`;

  const queryString = `INSERT INTO project_blogs_article (
    page_name, content_type, title, image_url, initial_text, detail_text, redirect_url,start_date, position
  ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;
  const values = [page_name, content_type, title, pathName, initial_text, detail_text, redirect_url, date, position];

  config.query(queryString, values, (error, results) => {
    if (error) {
      return res.status(500).send('Database insert failed');
    }
    res.status(200).json({ data: results.affectedRows });
  });

})


router.get('/lists', (req, res) => {
  config.query(`Select * from website_banners`, (error, results) => {
    if (error) {
      console.error(error);
      return res.status(500);
    }
    res.status(200).json({ data: results });
  });

})


module.exports = router;



