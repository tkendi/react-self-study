import React, { Component } from 'react';
import '../public/css/Domestic.css';

class Domestic extends Component {
  state = { 
    City: [], 
    NationWide: []
  };

  componentDidMount() {
    fetch('/Domestic')
      .then(res => res.json())
      .then(City => this.setState({ City }));
  }

  render() {
    return (
      <div class="body">
          {this.state.City.map(data => (
            <div key={data.id} className="accordion">
              <h1>{data.title}</h1>
              <div className="accordion-item">
                <div className="item-header">
                  <h1 className="domestic_title">확진환자</h1>
                </div>
                <p>{data.Confirm}명</p>
              </div>

              <div className="accordion-item">
                <div className="item-header">
                  <h1 className="domestic_title">격리해제 환자</h1>
                </div>
                <p>{data.Disassociate}명</p>
              </div>

              <div className="accordion-item">
                <div className="item-header">
                  <h1 className="domestic_title">격리환자</h1>
                </div>
                <p>{data.Quaranines}명</p>
              </div>

              <div className="accordion-item">
                <div className="item-header">
                  <h1 className="domestic_title">사망자</h1>
                </div>
                <p>{data.Dead}명</p>
              </div>
            </div>
          ))}
      </div>
    );
  }
}

export default Domestic;
