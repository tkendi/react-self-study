const axios = require('axios');
const fs = require('fs');

const file_load = () => {
  try {
    return JOSN.parse(fs.readFileSync('../data/data.json'));
  } catch {
    return {};
  }
};

const file_save = (file_data) => {
  fs.writeFileSync('../data/data.json', JSON.stringify(file_data));
};

const weather_api = {
  fetch_data: async () => {
    //file save, load
    const data = load();
    const file_data = {};

    //Date()
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const day = today.getDay();
    const hours = today.getHours();
    const minutes = today.getMinutes();

    //Date func
    if (minutes < 45) {
      hours = hours - 1;
      if (hours < 0) {
        //오전 12시는 전날로 계산
        today.setDate(today.getDate() - 1);
        day = today.getDay();
        month = today.getMonth() + 1;
        year = today.getFullYear();
        hours = 23;
      }
    }
    
    //숫자변환 => 9시 -> 0900으로 변경
    if(hours < 10) {
        hours = "0" + hours;
    }
    if (month < 10) {
        month = "0" + month;
    }
    if(day < 10) {
        day = "0" + day;
    }
    
    today = year + "" + month + "" + day;
    base_time = hours + "" + minutes + "00"

    axios.get(`http://apis.data.go.kr/1360000/VilageFcstInfoService/getUltraSrtFcst${process.env.serviceKey}&base_date=${today}&base_time=${base_time}&nx=55&ny=127&pageNo=1&numOfRows=7&dataType=json`)
    .then((res) => {
        console.log(res.data.response.body.items.item)
    })
  },
};
