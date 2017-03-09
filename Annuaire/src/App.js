import React, { Component } from 'react';
import Footer from'./Footer/Footer.jsx';
import Header from './Header/Header.jsx';
import Grid from './grid/Grid.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Grid />
        <Footer /> 
      </div>
    );
  }
}


export default App;
