import React, { Component } from 'react';
import Modal from './modal/modal.jsx';
import wireframe from './img/maquette.jpg'
import Header from './Header/Header.jsx';
import Grid from './grid/Grid.jsx';

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
