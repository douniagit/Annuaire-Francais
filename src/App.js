import React, { Component } from 'react';
import {StickyContainer} from 'react-sticky';
import Footer from'./Footer/Footer.jsx';
import Header from './Header/Header.jsx';
import Grid from'./Grid/Grid.jsx';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <StickyContainer>
          <Header></Header>
          <Grid/>
          <Footer></Footer>
        </StickyContainer>
      </div>
    );
  }
}


export default App;
