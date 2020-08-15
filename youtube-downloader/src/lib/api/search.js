import axios from "axios";

let optionParams = {
  q: "",
  part: "snippet",
  key: process.env.REACT_APP_ServiceKey,
  type: "video",
};

optionParams.q = "스토커";

optionParams.q = encodeURI(optionParams.q);

let url = "https://www.google.apis.com/youtube/v3/search?";

for (let option in optionParams) {
  url += option + "=" + optionParams[option] + "&";
}

url = url.substr(0, url.length - 1);
console.log(url);

axios.get(url).then(function (response) {
  const items = response.data.items;
  const info = {
    title: [],
  };

  for (const keys in items) {
    info.title[keys] = items[keys].snippet.title;
  }

  return info;
});
