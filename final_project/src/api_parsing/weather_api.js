import React, { Component } from 'react';
import Postfeatured from './Postfeatured'
import axios from 'axios';

class weather_api extends Component {
  state = {
    temp: '',
    name: '',
    location: '',
  };

  //api baseURL과 APIID 설정
  api = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5',
  });

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position) => {
      const getWeather = this.api.get(
        '/weather',
        {
          params: {
            lat: position.coords.latitude,
            lon: position.coords.longitude,
            appid: '4005857b222799490b299bd4b2ffd286'
          },
        },
        (err) => {
          //default key create position lat="35.1600085" lon="126.851411"
          // params: {
          //   lat: '35.1600085',
          //   lon: '126.851411'
          // },

          console.log(err);
        }
      );
      getWeather
        .then((res) => {
          this.setState({
            temp: Math.ceil(res.data.main.temp - 273.15), //화씨에서 섭씨로 변경
            name: res.data.weather[0].main, //날씨
            location: res.data.name,
          });
        })
        .catch((err) => console.log(err));
    });
  }

  render() {
    const { temp, name, location } = this.state;
    return <Postfeatured temp={temp} name={name} location={location} />;
  }
}

export default weather_api;
