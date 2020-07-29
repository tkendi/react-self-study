const express = require('express');
const router = express.Router();
const fs = require('fs')
const axios = require('axios')

const URL = process.env.URL
const date = new Date()

const base_Date = `${date.getFullYear()}${("0" + (date.getMonth() + 1)).slice(-2)}${("0" + date.getDate()).slice(-2)}`
const base_Time = `${("0" + date.getHours()).slice(-2)}00`

router.get('/', async (req, res) => {
    const data = await axios.get(`${URL}&serviceKey=${process.env.serviceKey}&numOfRows=10&pageNo=1&dataType=json&base_date=${base_Date}&base_time=${base_Time}&nx=37&ny=127`)
    
    fs.writeFileSync('../data/data.json', data)
})

module.exports = router;
