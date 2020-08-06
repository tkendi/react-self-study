import axios from "axios";

export const weatherData = async (nx: number, ny: number) => {
  const data = await axios.get(`http://localhost:4000/api?nx=${nx}&ny=${ny}`);
  const info = {
    TMP: 0,
  };

  info.TMP = data.data.T1H;

  return info;
};
