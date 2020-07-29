const express = require('express');
const router = express.Router();
const fs = require('fs')

router.get('/', (req, res) => {
    var data = 'Hello FileSystem'
    fs.writeFileSync('../../data/data.json', data)
    res.json({username: 'bryan'})
})

module.exports = router;
