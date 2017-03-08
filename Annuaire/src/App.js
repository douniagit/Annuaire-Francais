import React, { Component } from 'react';
import Card from "./Card/Card.jsx";
import Header from './Header/Header.jsx';
import Grid from './grid/Grid.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
     
      <Header></Header>
        <Grid />
        <Card />
      </div>
    );
  }
}


export default App;
