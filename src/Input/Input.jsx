import React, {Component} from 'react';
import './input.css';
var Select = require('react-select');
import 'react-select/dist/react-select.css';


class Input extends Component {
  constructor(props){
    super(props)
    this.state = {
      options: this.props.options,
      value: []
    }
    console.log(this.props.onSelectChange);
  }

  handleSelectChange (value) {
      // console.log('You\'ve selected:', JSON.stringify(value));
      // console.log(this);
      this.setState({ value });
      let results = value.split(',');
      console.log(results)
      this.props.onSelectChange(results);
    }

	render () {
		return (
			<div className="input">
        <span className="border-anim">
          <Select className="search-bar" multi simpleValue value={this.state.value} placeholder="Select your favourite(s)" options={this.state.options} onChange={this.handleSelectChange.bind(this)}/>
        </span>
			</div>
		);
	}
};
module.exports = Input;
