import axios from 'axios'

export const weatherData = async() => {
    const data = await axios.get('http://localhost:4000/api')
    console.log(data)

    const info = {}
    info.baseTime = data.data.baseTime;
    info.baseDate = data.data.baseDate

    return info
}