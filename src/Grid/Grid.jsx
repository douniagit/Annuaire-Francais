import React, { Component } from 'react';
import './Grid.css';
import {Sticky} from 'react-sticky';
import Card from "../Card/Card.jsx";
import Dropdown from '../Dropdown/Dropdown.jsx';
import AddRessource from '../modal/buttonModal.jsx';

class Grid extends Component {
  constructor(props){
    super(props)
    console.log('value header', this.props.value)
  }

  render() {
    console.log('value header', this.props.value)
    return (
      <div className="grid">
       <Sticky className="x" stickyClassName="stickyDropDown" topOffset={-74} >
            <Dropdown />
         </Sticky>

        <div className="grid-wrapper">
          <Card value={this.props.value} />
        </div>
        <div className="button-wrapper">
          <AddRessource/>
        </div>
      </div>
    );
  }
}

export default Grid;
