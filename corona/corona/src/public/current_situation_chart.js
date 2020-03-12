import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const databaseURL = 'https://ncov-19-d22a5.firebaseio.com/';

class current_situation_chart extends Component {
  constructor() {
    super();
    this.state = {
      Domestic: {},
    };
  }

  _get() {
    fetch(`${databaseURL}/corona/Domestic.json`)
      .then(res => {
        if (res.status != 200) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then(Domestic => this.setState({ Domestic: Domestic }));
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.Domestic != this.state.Domestic;
  }

  componentDidMount() {
    this._get();
  }

  render() {
    return (
      <div>
        {Object.keys(this.state.Domestic).map(id => {
          const word = this.state.Domestic[id];
          return (
            <div key={id}>
              <Card>
                <CardContent>
                  <Typography color="textSecondary" gutterBottom>
                    {word.title}
                  </Typography>
                  <Typography variant="h5" component="h2">
                    {word.Confirm} {word.Disassociate} {word.Quaranines} {word.Dead}
                  </Typography>
                </CardContent>
              </Card>
              <br />
            </div>
          );
        })}
      </div>
    );
  }
}

export default current_situation_chart;
