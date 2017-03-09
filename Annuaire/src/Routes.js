import React from 'react';
import { Router, Route} from 'react-router';
import App from './App.js';
//import Admin from './Admin/BackOffice.jsx';


const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App} />
  </Router>
);


export default Routes;
