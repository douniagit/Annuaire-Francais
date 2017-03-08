import React, { Component } from 'react';
import './Grid.css';
import Dropdown from './dropdown/Dropdown.jsx';
import Input from './input/Input.jsx';

class Grid extends Component {
  render() {
    return (
      <div className="Grid">
        <Dropdown />
        <Input />
      </div>
    );
  }
}

export default Grid;
