import React, { Component } from 'react';
import './dropdown.css';

class Dropdown extends Component {
  constructor(props) {
   super(props);
   this.state = { isLevelMouseOver: false };
   this.state = { isFormatMouseOver: false };
   this.state = { isAgeMouseOver: false };
   this.state = { isLanguageMouseOver: false };
   this.state = { isThematicMouseOver: false };
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
        <div className="search-filter">
          <a  onMouseOver={(e) => this.levelMouseOverHandler(e)} onMouseOut={(e) => this.levelMouseOutHandler(e)} style={{background: (this.state.isLevelMouseOver)? 'c3c1c1': 'dadada'}}>Level</a>
          <a  onMouseOver={(e) => this.formatMouseOverHandler(e)} onMouseOut={(e) => this.formatMouseOutHandler(e)} style={{background: (this.state.isFormatMouseOver)? 'c3c1c1': 'dadada'}}>Format</a>
          <a  onMouseOver={(e) => this.ageMouseOverHandler(e)} onMouseOut={(e) => this.ageMouseOutHandler(e)} style={{background: (this.state.isAgeMouseOver)? 'c3c1c1': 'dadada'}}>Age</a>
          <a  onMouseOver={(e) => this.languageMouseOverHandler(e)} onMouseOut={(e) => this.languageMouseOutHandler(e)} style={{background: (this.state.isLanguageMouseOver)? 'c3c1c1': 'dadada'}}>Language</a>
          <a  onMouseOver={(e) => this.thematicMouseOverHandler(e)} onMouseOut={(e) => this.thematicMouseOutHandler(e)} style={{background: (this.state.isThematicMouseOver)? 'c3c1c1': 'dadada'}}>Thematics</a>
        </div>
      <div className="filter-option"></div>
        <div className="under-menu">
          <div className="sub-under-menu" onMouseOver={(e) => this.levelMouseOverHandler(e)} onMouseOut={(e) => this.levelMouseOutHandler(e)} style={{display: (this.state.isLevelMouseOver)? 'flex': 'none'}}>
            <a className="">Beginner</a>
            <a  className="">Intermediate</a>
            <a  className="">Advanced</a>
          </div>
          <div className="sub-under-menu" onMouseOver={(e) => this.formatMouseOverHandler(e)} onMouseOut={(e) => this.formatMouseOutHandler(e)} style={{display: (this.state.isFormatMouseOver)? 'flex': 'none'}}>
            <a  className=""><i className="fa fa-video-camera" aria-hidden="true"></i>Video</a>
            <a  className=""><i className="fa fa-pencil" aria-hidden="true"></i>Write</a>
            <a  className=""><i className="fa fa-gamepad" aria-hidden="true"></i>Game</a>
          </div>
          <div className="sub-under-menu" onMouseOver={(e) => this.ageMouseOverHandler(e)} onMouseOut={(e) => this.ageMouseOutHandler(e)} style={{display: (this.state.isAgeMouseOver)? 'flex': 'none'}}>
            <a  className="">7-12</a>
            <a  className="">12-18</a>
            <a  className="">18+</a>
          </div>
          <div className="sub-under-menu" onMouseOver={(e) => this.languageMouseOverHandler(e)} onMouseOut={(e) => this.languageMouseOutHandler(e)} style={{display: (this.state.isLanguageMouseOver)? 'flex': 'none'}}>
            <a  className="en">English</a>
            <a  className="fr">French</a>
            <a  className="ara">Arab</a>
          </div>
          <div className="sub-under-menu" onMouseOver={(e) => this.thematicMouseOverHandler(e)} onMouseOut={(e) => this.thematicMouseOutHandler(e)} style={{display: (this.state.isThematicMouseOver)? 'flex': 'none'}}>
            <a  className="">Politics</a>
            <a  className="">Art</a>
            <a  className="">Music</a>
            <a  className="">Cinema</a>
          </div>
        </div>
      </div>
    );
  }
}


export default Dropdown;
