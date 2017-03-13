import React, { Component } from 'react';
import './Header.css';
import Logo from '../../public/assets/logo-cocoricourse.png';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className= "main-header">
          <img className="logo" src={Logo}></img>
          <button className="scroll-button" type="button">Click to scroll</button>
        </div>

      </div>

    );
  }
}

export default Header;
