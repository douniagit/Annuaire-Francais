import React, { Component } from 'react';
import './Grid.css';
import Dropdown from '../Dropdown/Dropdown.jsx';
import Input from '../Input/Input.jsx';

class Grid extends Component {
  render() {
    return (
      <div className="grid">

        <Dropdown />
        <Input />
      </div>
    );
  }
}

export default Grid;
