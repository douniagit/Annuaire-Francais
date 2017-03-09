import React, { Component } from 'react';
import './dropdown.css';

class Dropdown extends Component {
  constructor(props) {
   super(props);
   this.state = { isLevelMouseOver: true };
   this.state = { isFormatMouseOver: true };
   this.state = { isAgeMouseOver: true };
   this.state = { isLanguageMouseOver: true };
   this.state = { isThematicMouseOver: true };
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
 thematicMouseOverHandler() {
   this.setState({ isThematicMouseOver: true });
 }
 thematicMouseOutHandler(){
   this.setState({ isThematicMouseOver: false });
 }
  render() {
    return (
      <div className="dropdown">
        <ul className="search-filter">
          <li className="level"><a href="#">Level</a>
            <ul className="sub-level-filter">
              <li><a href="#">Débutant</a></li>
              <li><a href="#">Intermédiaire</a></li>
              <li><a href="#">Avancé</a></li>
            </ul>
          </li>
          <li className="format"><a href="#">Format</a>
            <ul className="sub-format-filter">
              <li><a href="#">Videos</a></li>
              <li><a href="#">Articles</a></li>
              <li><a href="#">Jeux</a></li>
            </ul>
          </li>

          <li className="age"><a href="#">Age</a>
            <ul className="sub-age-filter">
              <li><a href="#">BB</a></li>
              <li><a href="#">Jeune</a></li>
              <li><a href="#">Vieux</a></li>
            </ul>
          </li>

          <li className="lang"><a href="#">Language</a>
            <ul className="sub-lang-filter">
              <li><a href="#">Français</a></li>
              <li><a href="#">Anglais</a></li>
              <li><a href="#">Japonais</a></li>
            </ul>
          </li>
        </ul>
        <div className="search-filter">
          <a href="#" onMouseOver={(e) => this.levelMouseOverHandler(e)} onMouseOut={(e) => this.levelMouseOutHandler(e)} style={{background: (this.state.isLevelMouseOver)? '#c3c1c1': '#dadada'}}>Level</a>
          <a href="#" onMouseOver={(e) => this.formatMouseOverHandler(e)} onMouseOut={(e) => this.formatMouseOutHandler(e)} style={{background: (this.state.isFormatMouseOver)? '#c3c1c1': '#dadada'}}>Format</a>
          <a href="#" onMouseOver={(e) => this.ageMouseOverHandler(e)} onMouseOut={(e) => this.ageMouseOutHandler(e)} style={{background: (this.state.isAgeMouseOver)? '#c3c1c1': '#dadada'}}>Age</a>
          <a href="#" onMouseOver={(e) => this.languageMouseOverHandler(e)} onMouseOut={(e) => this.languageMouseOutHandler(e)} style={{background: (this.state.isLanguageMouseOver)? '#c3c1c1': '#dadada'}}>Language</a>
          <a href="#" onMouseOver={(e) => this.thematicMouseOverHandler(e)} onMouseOut={(e) => this.thematicMouseOutHandler(e)} style={{background: (this.state.isThematicMouseOver)? '#c3c1c1': '#dadada'}}>Thematics</a>
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
          <div className="sub-under-menu" onMouseOver={(e) => this.thematicMouseOverHandler(e)} onMouseOut={(e) => this.thematicMouseOutHandler(e)} style={{display: (this.state.isThematicMouseOver)? 'flex': 'none'}}>
            <a href="#" className="">Politics</a>
            <a href="#" className="">Art</a>
            <a href="#" className="">Musique</a>
            <a href="#" className="">Cinema</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Dropdown;
