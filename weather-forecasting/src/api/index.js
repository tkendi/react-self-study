import axios from "axios";

export const weatherData = async (nx, ny) => {
  console.log(nx, ny);
  const data = await axios.get(`http://localhost:4000/api?nx=${nx}&ny=${ny}`);
  console.log(data);

  const info = {};
  info.baseTime = data.data.baseTime;
  info.baseDate = data.data.baseDate;

  console.log(info)

  return info;
};
