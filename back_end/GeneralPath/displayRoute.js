const express = require('express');
const router = express.Router();
const config = require('../Service/config');

router.post('/banner-list', async (req, res) => {
    const { pageName } = req.body;
    config.query(`SELECT * FROM website_banners WHERE img_show = 'Y' AND page_name = '${pageName}' ORDER BY position ASC`, (error, results) => {
        if (error) {
            console.error(error);
            return res.status(500);
        }
        // console.log(results)
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


module.exports = router;



