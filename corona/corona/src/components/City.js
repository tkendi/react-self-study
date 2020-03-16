import React, { Component } from "react";
import '../public/css/City.css'

class Corona extends Component {
  state = { datas: [] };

  componentDidMount() {
    fetch("/City")
      .then(res => res.json())
      .then(datas => this.setState({ datas }));
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.datas.map(data => (
            <li key={data.id}>
              <h1>코로나바이러스감염증-19 국내 발생현황 {data.Standard_Time}</h1>
              <p>{data.Seoul_num}</p>
              <p>{data.Seoul_Increase_num}</p>
              <p>{data.Seoul_Dead_num}</p>
              <p>{data.Busan_num}</p>
              <p>{data.Busan_Increase_num}</p>
              <p>{data.Busan_Dead_num}</p>
              <p>{data.Daegu_num}</p>
              <p>{data.Daegu_Increase_num}</p>
              <p>{data.Daegu_Dead_num}</p>
              <p>{data.Incheon_num}</p>
              <p>{data.Incheon_Increase_num}</p>
              <p>{data.Incheon_Dead_num}</p>
              <p>{data.Gwangju_num}</p>
              <p>{data.Gwangju_Increase_num}</p>
              <p>{data.Gwangju_Dead_num}</p>
              <p>{data.Daejeon_num}</p>
              <p>{data.Daejeon_Increase_num}</p>
              <p>{data.Daejeon_Dead_num}</p>
              <p>{data.Ulsan_num}</p>
              <p>{data.Ulsan_Increase_num}</p>
              <p>{data.Ulsan_Dead_num}</p>
              <p>{data.Sejong_num}</p>
              <p>{data.Sejong_Increase_num}</p>
              <p>{data.Sejong_Dead_num}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Corona;