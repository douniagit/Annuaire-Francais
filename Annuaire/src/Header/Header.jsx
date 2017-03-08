import React, { Component } from 'react';
import './Header.css';
import Logo from '/home/simplonco/Documents/Projet-Annuaire/Annuaire-Fran-ais/Annuaire/public/assets/logo-cocoricourse.png';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className= "main-header">
          <img className="logo" src={ Logo }></img>

        </div>
      </div>
    );
  }
}

export default Header;
