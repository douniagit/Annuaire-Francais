import React, { Component } from 'react';
import './Header.css';
import Logo from '../../public/assets/logo-cocoricourse.png';
import Input from '../Input/Input.jsx';
import {StickyContainer, Sticky} from 'react-sticky';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className= "main-header">
          <img className="logo" src={Logo}></img>
            <Sticky>
              <Input/>
            </Sticky>
        </div>
      </div>

    );
  }
}

export default Header;
