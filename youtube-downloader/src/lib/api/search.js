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

optionParams.q = encodeURI(optionParams.q);

export const search = async (text) => {
  console.log(text);
  // optionParams.q = text;

  // let url = "https://www.googleapis.com/youtube/v3/search?";

  // for (let option in optionParams) {
  //   url += option + "=" + optionParams[option] + "&";
  // }

  // url = url.substr(0, url.length - 1);

  // await axios.get(url).then(function (response) {
  //   const items = response.data.items;
  //   for (const keys in items) {
  //     info.title[keys] = items[keys].snippet.title;
  //     info.videoId[keys] = items[keys].id.videoId;
  //   }
  // });
  // return info;
};
// export const search = ({text}) => console.log(text)
