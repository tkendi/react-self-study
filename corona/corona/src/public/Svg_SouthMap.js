import React, { Component } from 'react';
import SouthKorea from '@svg-maps/south-korea';
import { CheckboxSVGMap } from 'react-svg-map';
import 'react-svg-map/lib/index.css';

class svg extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <CheckboxSVGMap map={SouthKorea} />;
  }
} 

export default svg;