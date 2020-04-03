import React, { Component } from 'react';
import '../../public/css/Domestic.css'

class test_template extends Component {   
  render() {
    return (
      <div className="accordion-item">
        <div className="item-header">
          <h1 className="city_title">Seoul</h1>
        </div>    
        <p>확진환자:{this.props.patient}</p>
        <p>전일대비증가:{this.props.increase}</p>
        <p>사망자:{this.props.dead}</p>
      </div>
    );
  }
}

export default test_template;
