import React, { Component } from 'react';
import Logo2 from './logo.png';

import './Header.css'

class Header extends Component {
  constructor(props) {
  super(props);
  this.state = {
    value: '',
    valueOne: '',
    valueTwo: '',
    valueThree: '',
};

  this.handleChange = this.handleChange.bind(this);
  this.handleChange1 = this.handleChange1.bind(this);

}

handleChange(event) {
  this.setState({value: event.target.value});
}
handleChange1(event) {
  this.setState({valueOne: event.target.value});
}

  render() {
    return (
      <div className="header">
              <div className="header">
                <img className="logo2" src={Logo2}></img>
                <div className="button-container">
                  <a className="button button3" href="#popup1">Login</a>
                  <button className="button3">Log out</button>


                  <div id="popup1" className="overlay">
                  	<div className="popup">
                  		<h2>Login page</h2>
                  		<a className="close" href="#">&times;</a>
                  		<div className="content">
                    <form>
                      Login:<br/>
                      <input input type="text" name="prenom" value={this.state.value} onChange={this.handleChange} />
                      <br/>
                      Password:<br/>
                      <input type="text" name="prenom" value={this.state.valueOne} onChange={this.handleChange1} />
                      <br/>
                    <div className="contain-btn">
      <button className="button3 btn">Submit</button>
                      <button className="button3 btn">Forgot Password ?</button>
                    </div>
                  </form>
                  		</div>
                  	</div>
                  </div>
                </div>
              </div>

      </div>
    );
  }
}


export default Header;
