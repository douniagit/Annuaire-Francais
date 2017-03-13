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
<a href="http://simplon.co/" title="Simplon.co" target="_blank">
<img src={logoSimplon} id="simplon-log" alt="logosimplon" />
</a>
<figcaption>Cocoricourse en partenariat avec Simplon</figcaption>
<p id="adresse">55 rue de vincennes<br />93100 Montreuil</p>
</figure>
</div>


<div className="social-log">
<a href="https://fr-fr.facebook.com/Simplon.co/" title="Facebook Simplon.co" target="_blank">
<i className="fa fa-facebook-square" aria-hidden="true" ></i>
</a>
<a href="https://twitter.com/simplonco?lang=fr" title="Follow Simplon.co" target="_blank">
<i className="fa fa-twitter" aria-hidden="true"></i>
</a>
<a href="https://fr.linkedin.com/company/simplon-co" title="Linkedin Simplon.co" target="_blank">
<i className="fa fa-linkedin" aria-hidden="true"></i>
</a>
</div>



</div>
      </div>
    );
  }
}
export default Footer;
