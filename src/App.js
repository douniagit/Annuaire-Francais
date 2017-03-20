import React, { Component } from 'react';
import {StickyContainer} from 'react-sticky';
import Footer from'./Footer/Footer.jsx';
import Header from './Header/Header.jsx';
import Grid from'./Grid/Grid.jsx';
import './App.css';
import data from './data/dataRessource.js';

let options = [];
data.site.forEach((info) => {
    info.keywords.forEach((e) => {
        options.push(e);
    })
});
options = options.filter( (el, i, arr) => { return arr.indexOf(el) === i; } );
options = options.map( (e) => { return {value: e, label: e}} );
console.log(options);


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      options: options,
      value: []
    };
  }
  onSelectChangeApp(value){
    this.setState({
      value: value
    })
    console.log("App Select Value",value)
  }
  onDropDownClickApp(value){
    this.setState({
      value: value
    })
    console.log("App DropDown Value",value)
  }
  render() {
    return (
      <div className="App">
        <StickyContainer>
          <Header options={this.state.options} value={this.state.value} onSelectChangeApp={this.onSelectChangeApp.bind(this)}></Header>
          <Grid value={this.state.value} onDropDownClickApp={this.onDropDownClickApp.bind(this)}/>
          <Footer></Footer>
        </StickyContainer>
      </div>
    );
  }
}


export default App;
