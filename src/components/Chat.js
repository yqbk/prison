import React, { Fragment } from 'react';

let Chat = ({ match }) => (
  <Fragment>
    <h3>{match.params.id}</h3>
  </Fragment>
);

export default Chat;
