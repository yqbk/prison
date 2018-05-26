import React from 'react';
import { connect } from 'unistore/react';
import actions from './actions/actions';

import Card from './components/Card';

import './App.css';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [0, 1, 2, 3, 4]
    };
  }
  render() {
    var box = this.state.data.map((item, i) => {
      return <Card key={i} no={i} />;
    });
    return <div className="app">{box}</div>;
  }
}

export default connect('count', actions)(Main);
