import * as React from 'react';
import './App.css';

import List from './List/List';

const logo = require('./logo.svg');

class App extends React.Component<{}, {}> {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to List App</h2>
        </div>
        <h2>List</h2>
          <List/>
      </div>
    );
  }
}

export default App;
