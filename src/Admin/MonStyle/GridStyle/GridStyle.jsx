import React, { Component } from 'react';
import Selection from '../../Components/InterfaceComponents/Selection/Selection.jsx'
import Header from '../../Components/InterfaceComponents/Header/Header.jsx'

import '../CssStyle/Style.css'

class Boutton extends Component {
  render() {
    return (
      <div className="boutton">

            <Header />
          <div className="contain">
            <Selection />
          <div className="resp">
          <div className="containtitle">
            <h2 className="sectiontitle">Grid Style</h2>
          </div>
            <div className="test">
            <div className="container-d">
              <ul>
                <li className="dropdownf">
                  <input type="checkbox" />
                  <a href="#" data-toggle="dropdown">BACKGROUND COLOR</a>
                  <ul className="dropdown-menuf">
                    <li><a href="#"><div className="color-contain"><div className="color-container"><div className="color c1"></div><div className="color c2"></div><div className="color c3"></div><div className="color c4"></div><div className="color c5"></div><div className="color c6"></div><div className="color c7"></div><div className="color c8"></div><div className="color c9"></div><div className="color c10"></div><div className="color c11"></div><div className="color c12"></div><div className="color c13"></div><div className="color c14"></div><div className="color c15"></div><div className="color c16"></div><div className="color c17"></div><div className="color c18"></div><div className="color c19"></div><div className="color c20"></div><div className="color c21"></div></div></div></a></li>
                  </ul>
                </li>

              </ul>
            </div>

            <div className="container-d">
              <ul>
                <li className="dropdownf">
                  <input type="checkbox" />
                  <a href="#" data-toggle="dropdown">FONT COLOR</a>
                  <ul className="dropdown-menuf">
                    <li><a href="#"><div className="color-contain"><div className="color-container"><div className="color c1"></div><div className="color c2"></div><div className="color c3"></div><div className="color c4"></div><div className="color c5"></div><div className="color c6"></div><div className="color c7"></div><div className="color c8"></div><div className="color c9"></div><div className="color c10"></div><div className="color c11"></div><div className="color c12"></div><div className="color c13"></div><div className="color c14"></div><div className="color c15"></div><div className="color c16"></div><div className="color c17"></div><div className="color c18"></div><div className="color c19"></div><div className="color c20"></div><div className="color c21"></div></div></div></a></li>

                  </ul>
                </li>

              </ul>
            </div>

            <div className="container-d">
              <ul>
                <li className="dropdownf">
                  <input type="checkbox" />
                  <a href="#" data-toggle="dropdown">BACKGROUND IMAGE</a>
                  <ul className="dropdown-menuf">
                    <li><a className="parc" href="#"><input type="text" name="lastname" value=""></input><button>Parcourir</button></a></li>
                  </ul>
                </li>

              </ul>
            </div>

            <div className="container-d">
              <ul>
                <li className="dropdownf">
                  <input type="checkbox" />
                  <a href="#" data-toggle="dropdown">ADD LOGO</a>
                  <ul className="dropdown-menuf">
                    <li><a className="parc" href="#"><input type="text" name="lastname" value=""></input><button>Parcourir</button></a></li>
                  </ul>
                </li>

              </ul>
            </div>

            </div>
          </div>
            </div>
      </div>
    );
  }
}


export default Boutton;
