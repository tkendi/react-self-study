const express = require('express');
const router = express.Router();
const cheerio = require('cheerio');
const request = require('request');
const app = express();

router.get('/', function(err, res, next) {
    let url = "http://ncov.mohw.go.kr/index_main.jsp"

    request(url, function(err, response, body) {
        let resultArr = [];

        const $ = cheerio.load(body);
        let colArr = $('num');
        for (let i = 0; i < colArr.length; i++) {
            resultArr.push(colArr[i].children[i].attribs.title)
        }
        
        res.json(resultArr);
    })
})

app.listen(3000, () => console.log('Listening port on 3000'));