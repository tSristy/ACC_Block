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
  const { content_type, title, initial_text, detail_text, redirect_url, position } = req.body;
  const date = new Date()
  const pathName = `http://localhost:2000/Images/${req.file.filename}`;

  const queryString = `INSERT INTO project_blogs_article (content_type, title, image_url, initial_text, detail_text, redirect_url,start_date, position) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
  const values = [content_type, title, pathName, initial_text, detail_text, redirect_url, date, position];

  config.query(queryString, values, (error, results) => {
    if (error) {
      console.error(error)
      return res.status(500).send('Database insert failed');
    }
    res.status(200).json({ data: results.affectedRows });
  });

})


router.get('/banner-list', (req, res) => {
  config.query(`SELECT * FROM website_banners WHERE is_active=1 ORDER BY id DESC`, (error, results) => {
    if (error) {
      console.error(error);
      return res.status(500);
    }
    res.status(200).json({ data: results });
  });
})


router.get('/content-list', (req, res) => {
  config.query(`SELECT * FROM project_blogs_article WHERE content_type='Projects' AND is_active=1 ORDER BY id DESC;
    SELECT * FROM project_blogs_article WHERE content_type='News & Articles' AND is_active=1 ORDER BY id DESC;
    SELECT * FROM project_blogs_article WHERE content_type='review' AND is_active=1 ORDER BY id DESC`, (error, results) => {
    if (error) {
      console.error(error);
      return res.status(500);
    }
    res.status(200).json({
      projectList: results[0],
      mediaList: results[1],
      reviewList: results[2]
    });
  });
})


router.get('/info', (req, res) => {
  const date = new Date();
  config.query(`SELECT COUNT(id) AS banner_no FROM website_banners WHERE is_active = 1;
    SELECT COUNT(id) AS content_no FROM project_blogs_article WHERE is_active = 1;
        SELECT CONVERT(created_at, CHAR) AS created_at, page_name FROM website_banners ORDER BY id DESC LIMIT 1;SELECT created_at, content_type FROM project_blogs_article ORDER BY id DESC LIMIT 1`, (error, results) => {
    if (error) {
      console.error(error);
      return res.status(500);
    }
    // console.log(results)
    res.status(200).json({
      bannerNo: results[0][0].banner_no || 1,
      contentNo: results[1][0].content_no || 1,
      lastBannerUpdate: results[2][0]?.created_at || date,
      lastBlogUpdate: results[3][0]?.created_at || date
    });
  });
})


router.put('/delete',(req,res)=>{
  // console.log(req.body)
  const {id, table} = req.body;
  config.query(`UPDATE ${table} SET is_active=0 WHERE id = ${id}`,(error, results) => {
    if (error) {
      console.error(error);
      return res.status(500);
    }
    // console.log(results)
    res.status(200).json({})
  })
})


module.exports = router;



