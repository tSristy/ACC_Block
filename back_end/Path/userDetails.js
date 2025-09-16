const express = require('express');
const { readFile, writeFile } = require('../Service/fileCheck');
const router = express.Router();

router.get('/info', async(req,res)=>{
    const user = await readFile();
    res.status(200).json({data: user})
})

router.post('/password-change', async (req, res) => {
    const { newPassword } = req.body;
    await writeFile(newPassword);
    const user = await readFile();
    res.status(200).json({data: user})
})

module.exports = router;

