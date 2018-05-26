import React from 'react';
// Styles
import '../styles/footer.css';

const handleLike = (currentIndex) => {
    console.log('currentIndex', currentIndex)
    return currentIndex;
};

// const handleDislike = () => {
//     return;
// };

export default ({currentIndex}) => {

    return (
        <footer className="flex flex--aic flex--jcc">
            <button className="btn btn--round">🙅‍♂️</button>
            <button className="btn btn--info">ℹ️</button>
            <button className="btn btn--round" onClick={ () => handleLike(currentIndex)}>
                ❤️
            </button>
        </footer>
    );
};
