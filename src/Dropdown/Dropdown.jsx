import React, { Component } from 'react';
import './dropdown.css';

class Dropdown extends Component {
  constructor(props) {
   super(props);
   this.state = { isLevelMouseOver: false,
                  isFormatMouseOver: false,
                  isAgeMouseOver: false,
                  isLanguageMouseOver: false,
                  isThematicMouseOver: false,
                  // value: this.props.value
                };
    console.log('DropDown',this.props.onDropDownClick)
 }
 handleDropDownCLick (value) {
    //  console.log('You\'ve selected:', JSON.stringify(value));
    //  console.log(this);
     this.props.value.push(value);
     this.props.onDropDownClick(this.props.value);
    //  this.state.value = []
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
    console.log('Value dropdown:',this.state.value)
    return (
      <div className="dropdown">
        <div className="search-filter">
          <a  onMouseOver={(e) => this.levelMouseOverHandler(e)} onMouseOut={(e) => this.levelMouseOutHandler(e)} style={{background: (this.state.isLevelMouseOver)? 'c3c1c1': 'dadada'}}>Level</a>
          <a  onMouseOver={(e) => this.formatMouseOverHandler(e)} onMouseOut={(e) => this.formatMouseOutHandler(e)} style={{background: (this.state.isFormatMouseOver)? 'c3c1c1': 'dadada'}}>Format</a>
          <a  onMouseOver={(e) => this.ageMouseOverHandler(e)} onMouseOut={(e) => this.ageMouseOutHandler(e)} style={{background: (this.state.isAgeMouseOver)? 'c3c1c1': 'dadada'}}>Age</a>
          <a  onMouseOver={(e) => this.languageMouseOverHandler(e)} onMouseOut={(e) => this.languageMouseOutHandler(e)} style={{background: (this.state.isLanguageMouseOver)? 'c3c1c1': 'dadada'}}>Language</a>
        </div>
      <div className="filter-option"></div>
        <div className="under-menu">
          <div className="sub-under-menu" onMouseOver={(e) => this.levelMouseOverHandler(e)} onMouseOut={(e) => this.levelMouseOutHandler(e)} style={{display: (this.state.isLevelMouseOver)? 'flex': 'none'}}>
            <a onClick={(e)=>{this.handleDropDownCLick("Beginner")}} className="">Beginner</a>
            <a onClick={(e)=>{this.handleDropDownCLick("Intermediate")}}className="">Intermediate</a>
            <a onClick={(e)=>{this.handleDropDownCLick("Advanced")}} className="">Advanced</a>
          </div>
          <div className="sub-under-menu" onMouseOver={(e) => this.formatMouseOverHandler(e)} onMouseOut={(e) => this.formatMouseOutHandler(e)} style={{display: (this.state.isFormatMouseOver)? 'flex': 'none'}}>
            <a  onClick={(e)=>{this.handleDropDownCLick("Exercices")}} className=""><i className="fa fa-pencil" aria-hidden="true"></i>Exercices</a>
            <a  onClick={(e)=>{this.handleDropDownCLick("Audios")}} className=""><i className="fa fa-headphones" aria-hidden="true"></i>Audios</a>
            <a  onClick={(e)=>{this.handleDropDownCLick("Games")}} className=""><i className="fa fa-gamepad" aria-hidden="true"></i>Games</a>
            <a  onClick={(e)=>{this.handleDropDownCLick("Articles")}} className=""><i className="fa fa-newspaper-o" aria-hidden="true"></i>Articles</a>
            <a  onClick={(e)=>{this.handleDropDownCLick("Quizz")}} className=""><i className="fa fa-question-circle" aria-hidden="true"></i>Quizz</a>
            <a  onClick={(e)=>{this.handleDropDownCLick("Lesson")}} className=""><i className="fa fa-file" aria-hidden="true"></i>Lessons</a>
            <a  onClick={(e)=>{this.handleDropDownCLick("Videos")}} className=""><i className="fa fa-camera" aria-hidden="true"></i>Videos</a>
          </div>
          <div className="sub-under-menu" onMouseOver={(e) => this.ageMouseOverHandler(e)} onMouseOut={(e) => this.ageMouseOutHandler(e)} style={{display: (this.state.isAgeMouseOver)? 'flex': 'none'}}>
            <a  onClick={(e)=>{this.handleDropDownCLick("Young")}} className="">Young</a>
            <a  onClick={(e)=>{this.handleDropDownCLick("Teenagers")}} className="">Teenagers</a>
            <a  onClick={(e)=>{this.handleDropDownCLick("Adults")}} className="">Adults</a>
          </div>
          <div className="sub-under-menu" onMouseOver={(e) => this.languageMouseOverHandler(e)} onMouseOut={(e) => this.languageMouseOutHandler(e)} style={{display: (this.state.isLanguageMouseOver)? 'flex': 'none'}}>
            <a  onClick={(e)=>{this.handleDropDownCLick("English")}} className="en">English</a>
            <a  onClick={(e)=>{this.handleDropDownCLick("French")}} className="fr">French</a>
            <a  onClick={(e)=>{this.handleDropDownCLick("Japanese")}} className="jp">Japanese</a>
          </div>
        </div>
      </div>
    );
  }
}


export default Dropdown;
