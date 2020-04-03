import React, { Component } from 'react';
import '../public/css/Domestic.css';
import test_template from './test/test_template';

class City extends Component {
  state = { datas: [] };

  componentDidMount() {
    fetch('/City')
      .then(res => res.json())
      .then(datas => this.setState({ datas }));
  }

  render() {
    return (
      <div className="body">
        {this.state.datas.map(data => (
          <div className="accordion">
            <h1>
              코로나바이러스감염증-19 도시 발생현황 ({data.Standard_Time})
            </h1>
            {/* <test_template
              key={data.Seoul.Seoul_num}
              patient={data.Seoul.Seoul_num}
              increase={data.Seoul.Seoul_Increase_num}
              dead={data.Seoul.Seoul_Dead_num}
            /> */}

            <div className = "accordion-item">
              <div className = "item-header">
                <h1 className = "city_title">Seoul</h1>
              </div>
              <p>확진환자:{data.Seoul.Seoul_num}</p>
              <p>전일대비증가:{data.Seoul.Seoul_Increase_num}</p>
              <p>사망자:{data.Seoul.Seoul_Dead_num}</p>
            </div>

            <div className="accordion-item">
              <div className="item-header">
                <h1 className="city_title">Busan</h1>
              </div>
              <p>확진환자:{data.Busan.Busan_num}</p>
              <p>전일대비증가:{data.Busan.Busan_Increase_num}</p>
              <p>사망자:{data.Busan.Busan_Dead_num}</p>
            </div>

            <div className="accordion-item">
              <div className="item-header">
                <h1 className="city_title">Daegu</h1>
              </div>
              <p>확진환자:{data.Daegu.Daegu_num}</p>
              <p>전일대비증가:{data.Daegu.Daegu_Increase_num}</p>
              <p>사망자:{data.Daegu.Daegu_Dead_num}</p>
            </div>

            <div className="accordion-item">
              <div className="item-header">
                <h1 className="city_title">Incheon</h1>
              </div>
              <p>확진환자:{data.Incheon.Incheon_num}</p>
              <p>전일대비증가:{data.Incheon.Incheon_Increase_num}</p>
              <p>사망자:{data.Incheon.Incheon_Dead_num}</p>
            </div>

            <div className="accordion-item">
              <div className="item-header">
                <h1 className="city_title">Gwangju</h1>
              </div>
              <p>확진환자:{data.Gwangju.Gwangju_num}</p>
              <p>전일대비증가:{data.Gwangju.Gwangju_Increase_num}</p>
              <p>사망자:{data.Gwangju.Gwangju_Dead_num}</p>
            </div>

            <div className="accordion-item">
              <div className="item-header">
                <h1 className="city_title">Daejeon</h1>
              </div>
              <p>확진환자:{data.Daejeon.Daejeon_num}</p>
              <p>전일대비증가:{data.Daejeon.Daejeon_Increase_num}</p>
              <p>사망자:{data.Daejeon.Daejeon_Dead_num}</p>
            </div>

            <div className="accordion-item">
              <div className="item-header">
                <h1 className="city_title">Ulsan</h1>
              </div>
              <p>확진환자:{data.Ulsan.Ulsan_num}</p>
              <p>전일대비증가:{data.Ulsan.Ulsan_Increase_num}</p>
              <p>사망자:{data.Ulsan.Ulsan_Dead_num}</p>
            </div>

            <div className="accordion-item">
              <div className="item-header">
                <h1 className="city_title">Sejong</h1>
              </div>
              <p>확진환자:{data.Sejong.Sejong_num}</p>
              <p>전일대비증가:{data.Sejong.Sejong_Increase_num}</p>
              <p>사망자:{data.Sejong.Sejong_Dead_num}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default City;
