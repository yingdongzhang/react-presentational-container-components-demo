import React, { Component } from 'react';
import './App.css';
import Comments from './components/Comments';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Comments />
        </header>
      </div>
    );
  }
}

export default App;
