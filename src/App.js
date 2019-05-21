import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import * as ROUTES from './constants/routes.js';
//import HomePage from './Components/HomePage/homepage.js';
import AdminPage from './Components/AdminPage/adminpage.js';
import CompanyPost from './Components/CompanyPost/companypost.js';
import Navigation from './Components/NavBar/Navigation.js';

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"


function App() {
  return (
    <div className="App">
      <Router>
        <Navigation/>
        <CompanyPost/>

        <Route path={ROUTES.ADMIN} component={AdminPage} />

      </Router>
    </div>
  );
}

export default App;
