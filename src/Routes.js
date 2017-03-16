import React from 'react';
import { Router, Route} from 'react-router';
import App from './App.js';
import Admin from './Admin/MonStyle/Boutton.jsx';


const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App} />
    <Route path="/admin" component={Admin}/>
  </Router>
);


export default Routes;
