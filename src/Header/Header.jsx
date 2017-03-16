import React, { Component } from 'react';
import './Header.css';
import Logo from '../../public/assets/logo-cocoricourse.png';
import Input from '../Input/Input.jsx';
import {StickyContainer, Sticky} from 'react-sticky';

class Header extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="Header">
        <div className= "main-header">
          <img className="logo" alt='Logo' src={Logo}></img>
            <Sticky>
              <Input options={this.props.options}  onSelectChange={this.props.onSelectChangeApp}/>
            </Sticky>
        </div>
      </div>

    );
  }
}

export default Header;
