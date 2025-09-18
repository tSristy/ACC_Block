const express = require('express');
const router = express.Router();
const config = require('../Service/config');

router.post('/list', async (req, res) => {
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


module.exports = router;



