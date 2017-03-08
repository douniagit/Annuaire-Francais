import React, { Component } from 'react';
import './Dropdown.css';

class Dropdown extends Component {
  render() {
    return (
      <div className="Dropdown">
        <h2>Filtrez votre recherche</h2>
        <ul>
          <li><a href="#">Level</a></li>
          <li><a href="#">Format</a></li>
          <li><a href="#">Age</a></li>
          <li><a href="#">Language</a></li>
        </ul>
      </div>
    );
  }
}

export default Dropdown;
