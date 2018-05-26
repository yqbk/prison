import React, { Fragment } from 'react';
// Styles
import '../styles/item.css';

let today = new Date();
let day = today.getDate();
let month = today.getMonth();

export default ({ item }) => (
  <div className="item flex flex--aic">
    <img className="item__img" src={item.photo} alt={item.name} />
    <div className="item__info flex flex--fdc">
      <strong>{item.name}</strong>
      <p>
        Matched on {day}/{month}
      </p>
    </div>
  </div>
);
