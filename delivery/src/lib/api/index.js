import axios from "axios";

const url = process.env.REACT_APP_URL;

export const cjDataParsing = async (number) => {
  try {
    const data = await axios.get(`${url}/${number}`);
    console.log(data);
    const parsing = {
      time: [],
      location: [],
      description: [],
      state: ""
    };

    const progress = data.data.progresses;
    console.log(progress);
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