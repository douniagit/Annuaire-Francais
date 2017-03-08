import React, { Component } from 'react';
import Footer from'./Footer/Footer.jsx';
import Grid from './grid/Grid.jsx';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Footer></Footer>
        <Grid />
      </div>
    );
  }
}


export default App;
