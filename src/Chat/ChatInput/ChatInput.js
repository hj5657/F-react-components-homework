import React, { Component } from 'react';
import './ChatInput.scss';

class ChatInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
    };
  }

  handleInputValue = (event) => {
    this.setState({
      message: event.target.value,
    });
  };

  handleChatInput = () => {
    this.props.onInputMessage(this.state.message);
    this.setState({
      message: '',
    });
  };

  render() {
    return (
      <footer className="ChatInput">
        <input type="text" onChange={this.handleInputValue} value={this.state.message} />
        <button type="button" onClick={this.handleChatInput}>
          Send
        </button>
      </footer>
    );
  }
}

export default ChatInput;
