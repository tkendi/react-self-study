import axios from "axios";

export const weatherData = async (nx: number, ny: number) => {
  const data = await axios.get(`http://localhost:4000/api?nx=${nx}&ny=${ny}`);
  const info = {
    TMP: "0",
    RNH: "0",
    SKY: "0"
  };

  info.TMP = data.data.T1H;
  info.RNH = data.data.RN1;
  info.SKY = data.data.PTY

  return info;
};
