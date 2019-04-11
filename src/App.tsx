import * as React from 'react';
import './App.css';

import logo from './logo.svg';
import Messages from './model/Messages';

class App extends React.Component {
  private messages:Messages;
  constructor() {
    super({});
    this.messages = new Messages();
  }
  
  public handleClickSerialize = () => {
    this.messages.serializeMessages();
  }
  
  public handleClickDeserialize = () => {
    this.messages.deserializeMessages();
  }
  
  public handleClickAdd = () => {
    this.messages.makeMessage();
  }

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <button onClick={this.handleClickSerialize}>Serialize</button>
        <button onClick={this.handleClickDeserialize}>Deserialize</button>
        <button onClick={this.handleClickAdd}>Add</button>
      </div>
    );
  }
}

export default App;
