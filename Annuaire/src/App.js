import React, { Component } from 'react';
import Modal from './modal/modal.js';
import './App.css';
import wireframe from './img/maquette.jpg'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Modal></Modal>
      </div>
    );
  }
}

export default App;
