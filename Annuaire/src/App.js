import React, { Component } from 'react';
import Footer from'./Footer/Footer.jsx';
import Grid from'./Grid/Grid.jsx';
import Header from './Header/Header.jsx';
import AddRessource from './modal/buttonModal.jsx'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Grid />
        <AddRessource/>
        <Footer></Footer>
      </div>
    );
  }
}


export default App;
