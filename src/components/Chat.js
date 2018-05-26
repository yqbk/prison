import React, { Fragment } from 'react';
import { connect } from 'unistore/react';
import actions from '../actions/actions';
import '../styles/chat.css';

const MY_ID = 666;

let choices = [
  ['😎', '😇', '😭'],
  ['💔', '💛', '😐'],
  ['🙏', '🤝', '💪'],
  ['👀', '🤷‍♂️', '🧥']
];
let responses = [
  ['🙏', '🤝', '💪'],
  ['👀', '🤷‍♂️', '🧥'],
  ['😎', '😇', '😭'],
  ['💔', '💛', '😐']
];

class Chat extends React.Component {
  state = {
    choicesId: 0,
    responsesId: 0
  };

  componentDidMount() {
    this.props.getMessages();
    console.log('this.props', this.props);
  }

  handleMessage = (to, message) => {
    let randomNum = Math.floor(Math.random() * 2);
    this.props.addMessage({
      from: MY_ID,
      to,
      message,
      timestamp: new Date()
    });
    this.setState({
      choicesId: this.state.choicesId + 1
    });
    setTimeout(() => {
      this.props.addMessage({
        from: to,
        to: MY_ID,
        message: responses[this.state.responsesId][randomNum],
        timestamp: new Date()
      });
      this.setState({
        responsesId: this.state.responsesId + 1
      });
      if (this.state.responsesId > 2) this.setState({ responsesId: 0 });
    }, 2000);
  };

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
          <li className={msg.from === MY_ID ? 'msg' : 'msg msg--mine'} key={i}>
            {msg.message}
          </li>
        );
      });
    };

    let renderChoices = () => {
      let now = new Date();
      let timestamp = now.toUTCString();
      let id = this.props.match.params.id;
      if (this.state.choicesId > 2) this.setState({ choicesId: 0 });
      return choices[this.state.choicesId].map((choice, i) => {
        return (
          <li className="choice" key={i}>
            <button
              onClick={() => this.handleMessage(id, choice)}
              className="btn btn--full"
            >
              {choice}
            </button>
          </li>
        );
      });
    };

    return (
      <Fragment>
        <ul className="chat">{renderMessages()}</ul>
        <ul className="choices flex flex--aic flex--jsb">{renderChoices()}</ul>
      </Fragment>
    );
  }
}

export default connect(['messages'], actions)(Chat);
