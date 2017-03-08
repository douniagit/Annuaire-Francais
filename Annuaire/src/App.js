import React, { Component } from 'react';
import Header from './Header/Header.jsx';
import Grid from './Grid/Grid.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header></Header>
        <Grid />
      </div>
    );
  }
}


export default App;
