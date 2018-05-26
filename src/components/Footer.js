import React from 'react';
import { connect } from 'unistore/react';
// Styles
import '../styles/footer.css';
import actions from './../actions/actions';

const handleLike = currentIndex => {
    console.log('currentIndex', currentIndex);

    this.props.like(currentIndex);

    return currentIndex;
};

// const handleDislike = () => {
//     return;
// };

const Footer = ({ currentIndex, like, dislike }) => {
    return (
        <footer className="flex flex--aic flex--jcc">
            <button className="btn btn--round" onClick={dislike}>
                🙅‍♂️
            </button>
            <button className="btn btn--info">ℹ️</button>
            <button className="btn btn--round" onClick={like}>
                ❤️
            </button>
        </footer>
    );
};

export default connect(['people', 'currentIndex', 'likes'], actions)(Footer);
