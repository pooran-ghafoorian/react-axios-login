import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
//import logo from './logo.svg';
//import './App.css';


import Login from '../Login/Login';

import './App.css';
import Admin from '../panel/admin';
import Article from '../panel/Article';
import Users from '../panel/users';
import pageadmin from '../panel/pageAdmin';

function App() {
  const Loginuser = JSON.parse(localStorage.getItem('users'));
  return (

    <BrowserRouter>

      <div className="App">
        <div className="logo">
          <a href="#">
            <h2>Logo</h2>
          </a>
        </div>
        <nav className="menudiv">
          <ul>
            <li><a href="/">ورود</a></li>
            <li><a href="/">درباره ما</a></li>
            <li><a href="/">تماس با ما</a></li>
            {Loginuser && Loginuser['token'] && <li><a href="/pageAdmin">پنل ادمین</a></li> && <label className="lbadmin">آقای /خانم مدیر </label>}
          </ul>
        </nav>



        <Switch>

          <Route path="/panelAdmin" exact component={Admin} />
          <Route path="/pageAdmin" exact component={pageadmin} />
          <Route path="/users" exact component={Users} />
          <Route component={Login} />
        </Switch>

      </div>
    </BrowserRouter>
  );
}

export default App;
