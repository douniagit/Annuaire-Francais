import React from 'react';
import { Router, Route} from 'react-router';
import App from './App.js';
import AdminInterface from './Admin/Interface/Interface.jsx';
import HeaderStyle from './Admin/MonStyle/HeaderStyle/HeaderStyle.jsx';
import GridStyle from './Admin/MonStyle/GridStyle/GridStyle.jsx';
import FooterStyle from './Admin/MonStyle/FooterStyle/FooterStyle.jsx';
import UpdateData from './Admin/MesDonnees/Update/Update.jsx';
import UploadData from './Admin/MesDonnees/Upload/Upload.jsx';


const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App} />
    <Route path="/AdminInterface" component={AdminInterface}/>
    <Route path="/AdminInterface/HeaderStyle" component={HeaderStyle}/>
    <Route path="/AdminInterface/GridStyle" component={GridStyle}/>
    <Route path="/AdminInterface/FooterStyle" component={FooterStyle}/>
    <Route path="/AdminInterface/UpdateData" component={UpdateData}/>
    <Route path="/AdminInterface/UploadData" component={UploadData}/>
  </Router>
);


export default Routes;
