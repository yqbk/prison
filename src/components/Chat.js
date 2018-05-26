import React, { Fragment } from 'react';
import { connect } from 'unistore/react';
import actions from '../actions/actions';

import ListItem from './ListItem';

class Chat extends React.Component {
  componentDidMount() {
    this.props.getMatches();
  }

  render() {
    let box = this.props.matches.map((item, i) => {
      return <h1>{item.name}</h1>;
    });
    return <Fragment>{box}</Fragment>;
  }
}

export default connect('matches', actions)(Chat);
