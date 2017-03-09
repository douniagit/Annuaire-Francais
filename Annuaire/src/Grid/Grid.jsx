import React, { Component } from 'react';
import './Grid.css';
import Card from "../Card/Card.jsx";
import Dropdown from '../Dropdown/Dropdown.jsx';
import Input from '../Input/Input.jsx';
import AddRessource from '../modal/buttonModal.jsx';

class Grid extends Component {
  render() {
    return (
      <div className="grid">
        <div className="grid-wrapper">
          <Input />
          <Dropdown />
          <Card />
        </div>
        <div className="button-wrapper">
          <AddRessource/>
        </div>
      </div>
    );
  }
}

export default Grid;
