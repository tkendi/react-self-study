import React, { Component } from "react";
import { numbers } from "../api";

class number extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }

  async componentDidMount() {
    const confirm = await numbers(this.props.city)
    this.setState({
      data: confirm
    })
    console.log(confirm)
  }

  async componentDidUpdate(prevProps, prevState) {
    if(prevProps.city !== this.props.city) {
      this.setState({
        
      })
    }
  }

  render() {
    return (
      <React.Fragment>
        <h1>확진자</h1>
        
      </React.Fragment>
    );
  }
}

export default number;
