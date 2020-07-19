import axios from 'axios'

const date = new Date()
const hours = date.getHours();
let startDt = `${date.getFullYear()}${("0" + (date.getMonth() + 1)).slice(-2)}${("0" + (date.getDate())).slice(-2)}`
let endDt = `${date.getFullYear()}${("0" + (date.getMonth() + 1)).slice(-2)}${("0" + (date.getDate())).slice(-2)}`

if (hours < 7) {
    startDt = `${date.getFullYear()}${("0" + (date.getMonth() + 1)).slice(-2)}${("0" + (date.getDate() - 1)).slice(-2)}`
    endDt = `${date.getFullYear()}${("0" + (date.getMonth() + 1)).slice(-2)}${("0" + (date.getDate() - 1)).slice(-2)}`
}

const url = `/openapi/service/rest/Covid19/getCovid19SidoInfStateJson?serviceKey=${process.env.REACT_APP_serviceKey}&pageNo=1&numOfRows=10&startCreateDt=${startDt}&endCreateDt=${endDt}&_type=json`

export const cityPicker = async() => {
    try {
        const data = await axios.get(url)
        const items = data.data.response.body.items.item
        const city = []


        for (const keys in items) {
            city[keys] = items[keys].gubun

        }

        return city
    } catch(e) {
        console.log(e)
    }
}