import React, { Component } from 'react';
import './input.css';

class Input extends Component {
  render() {
    return (
      <div className="input">

        <input type="text" className="search-bar" placeholder="Type your query here" />

        <span className="border-anim">
          <input type="text" className="search-bar" placeholder="Type your query here" />
        </span>

      </div>
    );
  }
}

export default Input;
