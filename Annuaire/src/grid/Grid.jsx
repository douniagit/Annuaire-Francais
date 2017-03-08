import React, { Component } from 'react';
import './Header.css'
import Dropdown from './dropdown/Dropdown.jsx';
import Input from './input/Input.jsx';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <Dropdown />
        <Input />
      </div>
    );
  }
}

export default Header;
