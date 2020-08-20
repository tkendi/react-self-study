import axios from "./client";

let optionParams = {
  q: "",
  part: "snippet",
  key: process.env.REACT_APP_ServiceKey,
  type: "video",
  maxResults: 99999,
};

const info = {
  title: [],
  videoId: [],
};

export const search = async (data) => {
  console.log(data)
  optionParams.q = "스토커"
  console.log(typeof(optionParams.q))

  optionParams.q = encodeURI(optionParams.q);

  let url = "https://www.googleapis.com/youtube/v3/search?";

  for (let option in optionParams) {
    url += option + "=" + optionParams[option] + "&";
  }

  url = url.substr(0, url.length - 1);

  await axios.get(url).then(function (response) {
    const items = response.data.items;
    for (const keys in items) {
      info.title[keys] = items[keys].snippet.title;
      info.videoId[keys] = items[keys].id.videoId;
    }
  });
  return info;
};
// export const search = ({text}) => console.log(text)
