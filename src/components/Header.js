import React from 'react';
import { Link } from 'react-router-dom';

// Styles
import '../styles/navbar.css';

export default () => (
  <header className="flex flex--aic flex--jsb">
    <button className="btn btn--top">⚙️</button>
    <Link to="/">
      <h1>PRIMATE</h1>
    </Link>
    <Link to="/matches" className="btn btn--top">
      💬
    </Link>
  </header>
);
