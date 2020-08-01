import axios from "axios";

const url = process.env.REACT_APP_URL;
const delivery_url = process.env.REACT_APP_Delivery_URL

export const cjDataParsing = async (number) => {
  try {
    const data = await axios.get(`${url}/${number}`);
    const parsing = {
      time: [],
      location: [],
      description: [],
      state: ""
    };

    const progress = data.data.progresses;
    for (const keys in progress) {
      parsing.time[keys] = progress[keys].time
      parsing.location[keys] = progress[keys].location.name
      parsing.description[keys] = progress[keys].description
    }
    parsing.state = data.data.state.text

    return parsing
  } catch (e) {
    console.log(e);
  }
};


export const deliveryName = async() => {
  try {
    const data = await axios.get(`${delivery_url}`)
    console.log(data)
    const parsing = {
      name: []
    };

    for(const keys in data.data) {
      parsing.name[keys] = data.data[keys].name
    }

    console.log(parsing)

    return parsing
  } catch(e) {
    console.log(e)
  }
}