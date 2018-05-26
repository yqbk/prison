import React from 'react';
// Styles
import '../styles/footer.css';

export default () => (
    <footer className="flex flex--aic flex--jcc">
        <button className="btn btn--round">🙅‍♂️</button>
        <button className="btn btn--info">ℹ</button>
        <button className="btn btn--round" onClick={() => console.log('test')}>
            ❤️
        </button>
    </footer>
);
