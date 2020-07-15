const axios = require('axios')
const cheerio = require('cheerio')

async function getHTML(deliver_url) {
    try {
        return await axios.get(deliver_url)
    } catch(error) {
        console.error(error)
    }
}

getHTML()
    .then(res => {
        let processing_pos = []
        const $ = cheerio.load(html.data)
        const bodyList = $("div.wrap-bwTable").children("div.common-hrTable-1")
    })