import React, { Fragment } from 'react';
import { connect } from 'unistore/react';
import actions from '../actions/actions';
import '../styles/chat.css';

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
      conversation.sort((a, b) => {
        a.timestamp < b.timestamp;
      });
      return conversation.map((msg, i) => {
        return (
          <li className={msg.from === MY_ID ? 'msg msg--mine' : 'msg'} key={i}>
            {msg.message}
          </li>
        );
      });
    };
    return (
      <Fragment>
        <ul className="chat">{renderMessages()}</ul>
      </Fragment>
    );
  }
}

export default connect(['messages'], actions)(Chat);
