import React, { Component } from 'react';
import Footer from'./Footer/Footer.jsx';
import Header from './Header/Header.jsx';
import Grid from './grid/Grid.jsx';
import Card from "./Card/Card.jsx";
import wireframe from './img/maquette.jpg'
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
