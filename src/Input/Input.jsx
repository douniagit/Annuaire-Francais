import React, {Component} from 'react';
import './input.css';
var Select = require('react-select');
import 'react-select/dist/react-select.css';


class Input extends Component {
  constructor(props){
    super(props)
    this.state = {
      options: this.props.options,
      value: this.props.value
    }
    console.log('input: ',this.props.onSelectChange);
  }

  handleSelectChange (value) {
      // console.log('You\'ve selected:', JSON.stringify(value));
      // console.log(this);
      this.setState({ value });
      console.log(value)
      let results = value.split(',');

      this.props.onSelectChange(results);
    }

	render () {
        console.log('resulsts', this.props.value)
		return (
			<div className="input">
        <span className="border-anim">
          <Select className="search-bar" multi simpleValue value={this.props.value} placeholder="Select your favourite(s)" options={this.state.options} onChange={this.handleSelectChange.bind(this)}/>
        </span>
			</div>
		);
	}
};
module.exports = Input;
