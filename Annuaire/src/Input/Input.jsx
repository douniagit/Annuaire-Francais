import React, { Component } from 'react';
import './input.css';

class Input extends Component {
  render() {
    return (
      <div className="Input">
        <input type="text" className="search-bar" title="Search" placeholder="Type your query..."></input>

      </div>
    );
  }
}

export default Input;
