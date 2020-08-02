import data from '../data/data.json'
import axios from 'axios'

export const weatherData = async() => {
    const data = await axios.get('http://localhost:4000/api')
    console.log(data)
}