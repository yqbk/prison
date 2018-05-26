import React, { Fragment } from 'react';
import { connect } from 'unistore/react';
import actions from './actions/actions';

import Footer from './components/Footer';
import Card from './components/Card';
import './styles/footer.css';

class Main extends React.Component {
  componentDidMount() {
    this.props.getPeople();
  }

  render() {
    let box = this.props.people.map((item, i) => {
      return <Card key={i} no={i} data={item} />;
    });
    return <Fragment>{box}</Fragment>;
  }
}

export default connect('people', actions)(Main);
