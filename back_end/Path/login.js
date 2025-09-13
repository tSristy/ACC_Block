const express = require('express');
const router = express.Router();
var jwt = require('jsonwebtoken');

const user = {
    userCode: 'admin',
    passCode: 'admin'
}

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    console.log(req.body)

    if (user.userCode === username && user.passCode === password) {
        const token = jwt.sign({
            code: 'T5AS3n!M',
            username: 'admin',
        }, "theGreatWallAACBrick")

        res.status(200).json({
            "user": 'admin',
            "access_token": token,
        })
    }
    else res.status(401).json({ message: "Please try again!" })
})

module.exports = router;



