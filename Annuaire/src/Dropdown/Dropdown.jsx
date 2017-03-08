import React, { Component } from 'react';

import './dropdown.css';

class Dropdown extends Component {
  render() {
    return (
      <div className="Dropdown group">
        <h2>Filtrez votre recherche</h2>
        <ul className="group dropdown-list">
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
