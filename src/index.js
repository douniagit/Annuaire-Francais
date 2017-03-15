import React from 'react';
import ReactDOM from 'react-dom';
import NormalizeCss from "normalize-css";
import {browserHistory} from 'react-router';
import Routes from './Routes.js';
//import "./index.css";

ReactDOM.render(
  <Routes history={browserHistory} />,
  document.getElementById('root')
);
