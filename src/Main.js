import React, { Fragment } from 'react';
import { connect } from 'unistore/react';
import actions from './actions/actions';

import Footer from './components/Footer';
import Card from './components/Card';
import './styles/footer.css';

class Main extends React.Component {
    componentDidMount() {
        this.props.getPeople();
        this.props.getMatches();
    }

    render() {
        let { currentIndex, removeCard } = this.props;

        console.log('currenIndex', currentIndex);

        let box = this.props.people.reverse().map((item, i) => {
            return (
                <Card
                    key={i}
                    no={i}
                    data={item}
                    // setCurrentIndex={i => this.props.setCurrentIndex(i)}
                    // removeCard={() => removeCard()}
                    currentIndex={currentIndex}
                    like={() => this.props.like(item.id)}
                    dislike={() => this.props.dislike(item.id)}
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
