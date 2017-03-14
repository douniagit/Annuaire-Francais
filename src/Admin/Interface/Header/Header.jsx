import React, { Component } from 'react';
import Logo from './logo.png';

import './Header.css'

class Header extends Component {
  render() {
    return (
      <div className="header">
              <div className="header">
                <img className="logo" src={Logo}></img>
                <div className="button-container">
                  <a className="button button3" href="#popup1">Login</a>
                  <button className="button3">Log out</button>


                  <div id="popup1" className="overlay">
                  	<div className="popup">
                  		<h2>Login page</h2>
                  		<a className="close" href="#">&times;</a>
                  		<div className="content">
                    <form action="/action_page.php">
                      Login:<br/>
                      <input type="text" name="firstname" value=""></input>
                      <br/>
                      Password:<br/>
                      <input type="text" name="lastname" value=""></input>
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
