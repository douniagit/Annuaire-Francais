import React from 'react';
import { Router, Route} from 'react-router';
import App from './App.js';
import Admin from './Admin/Interface/Interface.jsx';
import HeaderStyle from './Admin/MonStyle/HeaderStyle/HeaderStyle.jsx';
import GridStyle from './Admin/MonStyle/GridStyle/GridStyle.jsx';
import FooterStyle from './Admin/MonStyle/FooterStyle/FooterStyle.jsx';
import UpdateData from './Admin/MesDonnees/Update/Update.jsx';
import UploadData from './Admin/MesDonnees/Upload/Upload.jsx';



const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App} />
    <Route path="/Admin" component={Admin}/>
    <Route path="/Admin/HeaderStyle" component={HeaderStyle}/>
    <Route path="/Admin/GridStyle" component={GridStyle}/>
    <Route path="/Admin/FooterStyle" component={FooterStyle}/>
    <Route path="/Admin/UpdateData" component={UpdateData}/>
    <Route path="/Admin/EditData" component={UploadData}/>
  </Router>
);


export default Routes;
