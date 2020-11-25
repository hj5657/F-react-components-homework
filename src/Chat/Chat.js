import React, { Component } from 'react';
import './Chat.scss';
import ChatHeader from './ChatHeader/ChatHeader';
import ChatBox from './ChatBox/ChatBox';
import ChatInput from './ChatInput/ChatInput';
import shopData from '../data/shop.json';
import answersData from '../data/answers.json';

class Chat extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      shop: {},
      messages: [],
    };
  }

  componentDidMount() {
    const defaultMessage = answersData.find((answer) => answer.tags.includes('DEFAULT'));
    const messages = this.state.messages.concat(defaultMessage);

    setTimeout(() => {
      this.setState({
        shop: shopData,
        messages,
      });
    }, 1000);
  }

  setInputMessage = (message) => {
    answersData.forEach((answer) => {
      let flag = false;
      answer.tags.forEach((tag) => {
        if (message.includes(tag)) {
          flag = true;
        }
      });
      if (flag) {
        this.updateMessage(this.state.messages, answer);
      }
    });
  };

  updateMessage = (messages, answer) => {
    this.setState(() => {
      const newMessages = messages.concat(answer);
      return { messages: newMessages };
    });
  };

  render() {
    const { shop, messages } = this.state;
    return (
      <main className="Chat">
        <ChatHeader shop={shop} />
        <ChatBox messages={messages} />
        <ChatInput onInputMessage={this.setInputMessage} />
      </main>
    );
  }
}

export default Chat;
