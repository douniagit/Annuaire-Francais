import React, { Component } from 'react';
import './dropdown.css';

class Dropdown extends Component {
  constructor(props) {
   super(props);
   this.state = { isLevelMouseOver: true };
   this.state = { isFormatMouseOver: true };
   this.state = { isAgeMouseOver: true };
   this.state = { isLanguageMouseOver: true };
 }

 levelMouseOverHandler() {
   this.setState({ isLevelMouseOver: true });
 }
 levelMouseOutHandler(){
   this.setState({ isLevelMouseOver: false });
 }
 formatMouseOverHandler() {
   this.setState({ isFormatMouseOver: true });
 }
 formatMouseOutHandler(){
   this.setState({ isFormatMouseOver: false });
 }
 ageMouseOverHandler() {
   this.setState({ isAgeMouseOver: true });
 }
 ageMouseOutHandler(){
   this.setState({ isAgeMouseOver: false });
 }
 languageMouseOverHandler() {
   this.setState({ isLanguageMouseOver: true });
 }
 languageMouseOutHandler(){
   this.setState({ isLanguageMouseOver: false });
 }
  render() {
    return (
      <div className="dropdown">
        <h2>Filtrez votre recherche</h2>
        <div className="search-filter">
          <a href="#" onMouseOver={(e) => this.levelMouseOverHandler(e)} onMouseOut={(e) => this.levelMouseOutHandler(e)}>Level</a>
          <a href="#" onMouseOver={(e) => this.formatMouseOverHandler(e)} onMouseOut={(e) => this.formatMouseOutHandler(e)}>Format</a>
          <a href="#" onMouseOver={(e) => this.ageMouseOverHandler(e)} onMouseOut={(e) => this.ageMouseOutHandler(e)}>Age</a>
          <a href="#" onMouseOver={(e) => this.languageMouseOverHandler(e)} onMouseOut={(e) => this.languageMouseOutHandler(e)}>Language</a>
        </div>
        <div className="under-menu">
          <div className="sub-under-menu" onMouseOver={(e) => this.levelMouseOverHandler(e)} onMouseOut={(e) => this.levelMouseOutHandler(e)} style={{display: (this.state.isLevelMouseOver)? 'flex': 'none'}}>
            <a href="#" className="">Beginner</a>
            <a href="#" className="">Intermediate</a>
            <a href="#" className="">Advanced</a>
          </div>
          <div className="sub-under-menu" onMouseOver={(e) => this.formatMouseOverHandler(e)} onMouseOut={(e) => this.formatMouseOutHandler(e)} style={{display: (this.state.isFormatMouseOver)? 'flex': 'none'}}>
            <a href="#" className="">Video</a>
            <a href="#" className="">Write</a>
            <a href="#" className="">Game</a>
          </div>
          <div className="sub-under-menu" onMouseOver={(e) => this.ageMouseOverHandler(e)} onMouseOut={(e) => this.ageMouseOutHandler(e)} style={{display: (this.state.isAgeMouseOver)? 'flex': 'none'}}>
            <a href="#" className="">7-12</a>
            <a href="#" className="">12-18</a>
            <a href="#" className="">18+</a>
          </div>
          <div className="sub-under-menu" onMouseOver={(e) => this.languageMouseOverHandler(e)} onMouseOut={(e) => this.languageMouseOutHandler(e)} style={{display: (this.state.isLanguageMouseOver)? 'flex': 'none'}}>
            <a href="#" className="">Anglais</a>
            <a href="#" className="">Francais</a>
            <a href="#" className="">Japonais</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Dropdown;
