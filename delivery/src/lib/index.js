import axios from 'axios'

const url = process.env.REACT_APP_URL

export const cjParsing = async() => {
  try {
    const data = await axios.get(`${url}/632234576584`)
    console.log(data)
  } catch(e) {
    console.log(e)
  }
} 