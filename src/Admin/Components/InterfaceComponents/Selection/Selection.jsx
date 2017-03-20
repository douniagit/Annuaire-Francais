import React, { Component } from 'react';
import Header from '../Header/Header.jsx';
import {Link} from 'react-router';
import './Selection.css'

class Selection extends Component {
  render() {
    return (
      <div className="selection">
      <div className="container-dd">
        <div className="container-d">
             <ul>
               <li className="dropdown2">
                 <input type="checkbox" />
                 <a className="al" href="#" data-toggle="dropdown2">MON STYLE</a>
                 <ul className="dropdown2-menu">
                   <li><Link to ="/Admin/HeaderStyle">HEADER</Link></li>
                   <li><Link to ="/Admin/GridStyle">GRID</Link></li>
                   <li><Link to ="/Admin/FooterStyle">FOOTER</Link></li>
                 </ul>
               </li>
               <li className="dropdown2">
                 <input type="checkbox" />
                 <a className="al" href="#" data-toggle="dropdown2">MODIFIER DATA</a>
                 <ul className="dropdown2-menu">
                   <li><Link to="/Admin/UpdateData">UPLOAD</Link></li>
                   <li><Link to="/Admin/EditData">EDIT</Link></li>
                   <li><a href="#">REMOVE</a></li>
                 </ul>
               </li>
               <li className="dropdown2">
                 <input type="checkbox" />
                 <a className="al" href="#" data-toggle="dropdown2">/////</a>
                 <ul className="dropdown2-menu">
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
