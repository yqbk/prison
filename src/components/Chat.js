import React, { Fragment } from 'react';
import { connect } from 'unistore/react';
import actions from '../actions/actions';

import Item from './Item';

class Chat extends React.Component {
  componentDidMount() {
    this.props.getMatches();
  }

  render() {
    let matches = this.props.matches.map((item, i) => {
      return <Item item={item} key={i} />;
    });
    return <Fragment>{matches}</Fragment>;
  }
}

export default connect('matches', actions)(Chat);
