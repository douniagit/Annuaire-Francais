import React, { Component } from 'react';
import Card from "./Card/Card.jsx";
import Modal from './modal/modal.jsx';
import wireframe from './img/maquette.jpg'
import Footer from'./Footer/Footer.jsx';
import Header from './Header/Header.jsx';
import Grid from './grid/Grid.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
     
      <Header></Header>
        <Grid />
        <Card />
        <Footer></Footer>
      </div>
    );
  }
}


export default App;
