import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { depositMoney, withdrawlMoney, addToMessage, newMessage } from './actions';
class App extends Component {
  state = {
    inputValue: ''
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <br/>{this.props.dinero}<br/>
          {this.props.zprava}
        </p>
        <form onSubmit={(e) => (e.preventDefault())}>
          <label>
            input
            <input type="text" name="text" value={this.state.inputValue} onChange={this.inputChangeHandler} />
          </label>
          <button onClick={this.deposit}> Deposit </button>
          <button onClick={this.withdrawl}> Withdrawl </button>
          <button onClick={this.addToMessage}> Add to Message </button>
          <button onClick={this.newMessage}> New message </button>
        </form>
      </div>
    );
  }
  inputChangeHandler = (event) => {
    this.setState({ inputValue: event.target.value });
  };
  deposit = () => {
    this.props.depositMoney(+this.state.inputValue);
  }
  withdrawl = () => {
    this.props.withdrawlMoney(+this.state.inputValue);
  }
  addToMessage = () => {
    this.props.addToMessage(this.state.inputValue);
  }
  newMessage = () => {
    this.props.newMessage(this.state.inputValue);
  }
}

const mapStateToProps = (state) => {
  return {
    dinero: state.balance,
    zprava: state.motd,
  };
};
// export default App;
export default connect(mapStateToProps, {depositMoney, withdrawlMoney, addToMessage, newMessage})(App);
