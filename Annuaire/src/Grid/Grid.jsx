import React, { Component } from 'react';
import './Grid.css';
import Card from "../Card/Card.jsx";
import Dropdown from '../Card/Dropdown/Dropdown.jsx';
import Input from '../Input/Input.jsx';
import AddRessource from '../modal/buttonModal.jsx';

class Grid extends Component {
  render() {
    return (
      <div className="grid">
        <Dropdown />
        <Input />
        <Card />
        <AddRessource />
      </div>
    );
  }
}

export default Grid;
