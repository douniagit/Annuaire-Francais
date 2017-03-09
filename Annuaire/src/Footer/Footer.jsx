import React, { Component } from 'react';
import './Footer.css';
import logoSimplon from '../../public/assets/logo-simplonco.png';


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

<div className="social-log">
  <i className="fa fa-facebook-square" aria-hidden="true"></i>
    <i className="fa fa-twitter" aria-hidden="true"></i>
  </div>



</div>
      </div>
    );
  }
}
export default Footer;
