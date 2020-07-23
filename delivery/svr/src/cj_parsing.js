const axios = require('axios')

const cj_parsing = {
    live: async () => {
        await axios.get(`${URL}/${number}`)
    .then(function(res) {
      const progresses = res.data.progresses

      const time = {}
      const location = {}
      const description = {}

      console.log(res.data.progresses)
      for(const keys in progresses) {
        time[keys] = progresses[keys].time
        location[keys] = progresses[keys].location
        description[keys] = progresses[keys].description

        console.log(progresses[keys].time)
        console.log(progresses[keys].location)
        console.log(progresses[keys].description)
      }
      return ({time, location, description})
    })
    }   
}

