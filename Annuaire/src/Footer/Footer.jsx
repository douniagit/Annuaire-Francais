import React, { Component } from 'react';
import './Footer.css';
import logoSimplon from './Polygonelogo.png'

class Footer extends Component {
  render() {
    return (
      <div className="footer">
<div className="container-footer">
<div className="logo-simplon">
  <figure>
<img src={logoSimplon} id="simplon-log" alt="logosimplon" />
<figcaption>Cocoricourse en partenariat avec Simplon</figcaption>
</figure>
</div>
</div>
      </div>
    );
  }
}
export default Footer;
