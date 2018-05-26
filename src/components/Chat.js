import React, { Fragment } from 'react';
import { connect } from 'unistore/react';
import actions from '../actions/actions';

const MY_ID = 666;

class Chat extends React.Component {
  componentDidMount() {
    this.props.getMessages();
    console.log('this.props', this.props);
  }

  render() {
    let conversation = this.props.messages.filter(message => {
      console.log('message', message);
      return (
        (message.from == MY_ID && message.to == this.props.match.params.id) ||
        (message.from == this.props.match.params.id && message.to == MY_ID)
      );
    });
    let renderMessages = () => {
      return conversation.map((msg, i) => {
        return <li key={i}>{msg.message}</li>;
      });
    };
    return (
      <Fragment>
        <p>{this.props.match.params.id}</p>
        <ul>{renderMessages()}</ul>
      </Fragment>
    );
  }
}

export default connect(['messages'], actions)(Chat);
