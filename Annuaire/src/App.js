import React, { Component } from 'react';
import Footer from'./Footer/Footer.jsx';
import Header from './Header/Header.jsx';
import Dropdown from './Dropdown/Dropdown.jsx';
import Input from './Input/Input.jsx';
import Grid from'./Grid/Grid.jsx';
import Card from "./Card/Card.jsx";
import wireframe from './img/maquette.jpg'
import AddRessource from './modal/buttonModal.jsx'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Grid/>
        <AddRessource/>
        <Footer></Footer>
      </div>
    );
  }
}


export default App;
