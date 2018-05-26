import React from 'react';
import { connect } from 'unistore/react';
import actions from './actions/actions';

import Header from './components/Header';
import Footer from './components/Footer';
import Card from './components/Card';

import './main.css';

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
    return (
      <div className="app">
        <Header />
        <main>{box}</main>
        <Footer />
      </div>
    );
  }
}

export default connect('count', actions)(Main);
