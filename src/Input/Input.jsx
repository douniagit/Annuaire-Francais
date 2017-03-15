import React, { Component } from 'react';
import './input.css';
import data from '../data/dataRessource.js';
var Select = require('react-select');
import 'react-select/dist/react-select.css';


let options = [];
data.site.map(info => info.keywords.forEach(e =>
  if (options.indexOf({value: e, label: e}) == -1){
    options.push({value: e, label: e});
  }
  ));
console.log(options);


class Input extends Component {
  render() {
    return (
      <div className="input">
        <span className="border-anim">
         <input type="text" className="search-bar" name="search-input" onKeyPress={this.keyPressHandler} placeholder="Type your query here" />
          <Select.Async name="form-field-name" multi={true}/>
        </span>

      </div>
    );
  }
}

export default Input;
