import React, { Component } from 'react';
import Card from "./Card/Card.jsx";
import wireframe from './img/maquette.jpg'
import Footer from './Footer/Footer.jsx';
import Header from './Header/Header.jsx';

import Grid from './grid/Grid.jsx';

import Dropdown from './Dropdown/Dropdown.jsx';
import Input from './Input/Input.jsx';
import AddRessource from './modal/buttonModal.jsx'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>

        <Grid />

        <Footer></Footer>
        <Dropdown/>
        <Input/>

        <Card />
        <AddRessource/>
        <Footer></Footer>
      </div>
    );
  }
}


export default App;
