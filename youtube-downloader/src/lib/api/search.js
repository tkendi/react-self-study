import axios from "./client";

export const search = async (text) => {
  let optionParams = {
    q: "스토커",
    part: "snippet",
    key: process.env.REACT_APP_ServiceKey,
    type: "video",
    maxResults: 99999,
  };

  const info = {
    title: [],
    videoId: [],
  };
  
  optionParams.q = encodeURI(optionParams.q);

  let url = "https://www.googleapis.com/youtube/v3/search?";

  for (let option in optionParams) {
    url += option + "=" + optionParams[option] + "&";
  }

  url = url.substr(0, url.length - 1);

  console.log(url);

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
