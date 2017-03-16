import React, {Component} from 'react';
import './input.css';
import data from '../data/dataRessource.js';
var Select = require('react-select');
import 'react-select/dist/react-select.css';

let options = [];
data.site.forEach((info) => {
    info.keywords.forEach((e) => {
        options.push(e);
    })
});
options = options.filter( (el, i, arr) => { return arr.indexOf(el) === i; } );
options = options.map( (e) => { return {value: e, label: e}} );
console.log(options);
var results = [];

var Input = React.createClass({
	displayName: 'MultiSelectField',
	propTypes: {
		label: React.PropTypes.string,
	},
	getInitialState () {
		return {
			options: options,
			value: [],
		};
	},
	render () {
		return (
			<div className="input">
        <span className="border-anim">
          <Select className="search-bar" multi simpleValue disabled={this.state.disabled} value={this.state.value} placeholder="Select your favourite(s)" options={this.state.options} onChange={this.handleSelectChange} />
        </span>
			</div>
		);
	}
});
module.exports = Input;
