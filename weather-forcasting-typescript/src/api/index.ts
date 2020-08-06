import axios from 'axios'

export const weatherData = async(nx, ny) => {
    const data = await axios.get(`http://localhost:4000/api?nx=${nx}&ny=${ny}`)
    
    return data;
}