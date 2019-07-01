import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import '../styles/style.css';
import LoginPage from "../pages/login";
import { DashboardPage } from "../pages/dashboard";
import { ErrorPage } from "../pages/error";

const App=()=> {
  return (
    <div>
        <Router>
            <Route path='/' exact component={LoginPage} />
            <Route path='/error' component={ErrorPage} />
            <Route path='/dashboard'  component={DashboardPage}/>
        </Router>

    </div>
  );
};
export default App;
