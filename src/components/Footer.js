import React from 'react';
import { connect } from 'unistore/react';
// Styles
import '../styles/footer.css';
import actions from './../actions/actions';

const handleLike = currentIndex => {
    console.log('currentIndex', currentIndex);

    actions.like();

    return currentIndex;
};

// const handleDislike = () => {
//     return;
// };

const Footer = ({ currentIndex }) => {
    return (
        <footer className="flex flex--aic flex--jcc">
            <button className="btn btn--round">🙅‍♂️</button>
            <button className="btn btn--info">ℹ️</button>
            <button className="btn btn--round" onClick={() => this.props.like(currentIndex)}>
                ❤️
            </button>
        </footer>
    );
};

export default connect(['people', 'currentIndex', 'likes'], actions)(Footer);
