import React, { Component } from 'react';
import Footer from'./Footer/Footer.jsx';
import Header from './Header/Header.jsx';
import Grid from'./Grid/Grid.jsx';
import Card from "./Card/Card.jsx";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Grid/>
        <Footer></Footer>
      </div>
    );
  }
}


export default App;
