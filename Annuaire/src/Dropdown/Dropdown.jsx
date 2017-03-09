import React, { Component } from 'react';
import './dropdown.css';

class Dropdown extends Component {
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
      </div>
    );
  }
}

export default Dropdown;
