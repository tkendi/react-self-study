import axios from 'axios'

const date = new Date()
const startDt = `${date.getFullYear()}${("0" + (date.getMonth() - 1)).slice(-2)}${("0" + date.getDate()).slice(-2)}`
const endDt = `${date.getFullYear()}${("0" + (date.getMonth() - 1)).slice(-2)}${("0" + date.getDate()).slice(-2)}`

const url = `/openapi/service/rest/Covid19/getCovid19SidoInfStateJson?serviceKey=${process.env.REACT_APP_serviceKey}&pageNo=1&numOfRows=10&startCreateDt=${startDt}&endCreateDt=${endDt}&_type=json`

export const fetchData = async() => {
    try {
        const data = await axios.get(url)
        .then(function (res) {
            console.log(res)
        })

        return data;
    } catch(e) {
        console.log(e)
    }
}