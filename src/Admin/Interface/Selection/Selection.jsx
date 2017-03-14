import React, { Component } from 'react';


import './Selection.css'

class Selection extends Component {
  render() {
    return (
      <div className="selection">
        
      <div className="container-dd">
        <div className="container-d">
             <ul>
               <li className="dropdown">
                 <input type="checkbox" />
                 <a className="al" href="#" data-toggle="dropdown">MON STYLE</a>
                 <ul className="dropdown-menu">
                   <li><a href="#">HEADER</a></li>
                   <li><a href="#">GRID</a></li>
                   <li><a href="#">FOOTER</a></li>
                 </ul>
               </li>
               <li className="dropdown">
                 <input type="checkbox" />
                 <a className="al" href="#" data-toggle="dropdown">MODIFIER DATA</a>
                 <ul className="dropdown-menu">
                   <li><a href="#">//////</a></li>
                   <li><a href="#">/////</a></li>
                 </ul>
               </li>
               <li className="dropdown">
                 <input type="checkbox" />
                 <a className="al" href="#" data-toggle="dropdown">/////</a>
                 <ul className="dropdown-menu">
                   <li><a href="#">///</a></li>
                   <li><a href="#">////</a></li>

                 </ul>
               </li>
                   </ul>
                 </div>
                </div>

      </div>
    );
  }
}


export default Selection;
