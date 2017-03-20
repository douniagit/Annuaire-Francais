import React, { Component } from 'react';
import './Grid.css';
import {Sticky} from 'react-sticky';
import Card from "../Card/Card.jsx";
import Dropdown from '../Dropdown/Dropdown.jsx';
import AddRessource from '../modal/buttonModal.jsx';

class Grid extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div className="grid">
       <Sticky className="x" stickyClassName="stickyDropDown" topOffset={-34} >
            <Dropdown value={this.props.value} onDropDownClick={this.props.onDropDownClickApp}/>
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
