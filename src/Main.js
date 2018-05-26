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
        let { currentIndex, removeCard } = this.props;

        let box = this.props.people.reverse().map((item, i) => {
            return (
                <Card
                    key={i}
                    no={i}
                    data={item}
                    setCurrentIndex={i => this.props.setCurrentIndex(i)}
                    // removeCard={() => removeCard()}
                    currentIndex={currentIndex}
                    like={() => this.props.like(currentIndex) }
                />
            );
        });
        return (
            <Fragment>
                {box}
                <Footer currentIndex={currentIndex} />
            </Fragment>
        );
    }
}

export default connect(['people', 'currentIndex'], actions)(Main);
