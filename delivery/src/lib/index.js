import axios from 'axios'

const url = process.env.REACT_APP_URL

export const cjParsing = async() => {
  try {
    const data = await axios.get(`${url}/632234576584`)
    console.log(data)
    const time = []
    const location = []
    const description = []

    const progress = data.data.progresses
    console.log(progress)
    for (const keys in progress) {
      time[keys] = progress[keys].time,
      location[keys] = progress[keys].location,
      description[keys] = progress[keys].description
    }

    console.log(time)

  } catch(e) {
    console.log(e)
  }
}
