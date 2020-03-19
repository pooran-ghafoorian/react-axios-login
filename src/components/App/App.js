import React from 'react';

import {BrowserRouter, Switch, Route} from 'react-router-dom';
//import logo from './logo.svg';
//import './App.css';


import Login from '../Login/Login';

import './App.css';
import Admin from '../panel/admin';
import Article from '../panel/Article';
import Users from '../panel/users';
import pageadmin from '../panel/pageAdmin';

function App() {
  const Loginuser= JSON.parse( localStorage.getItem('users'));
  return (
    
    <BrowserRouter>
      

      <div className="App">
        <div className="header">    
            <nav className="nav">
               <ul>
                   <li><a href ="/">ورود</a></li>
                   <li><a href ="/">درباره ما</a></li>
                   <li><a href ="/">تماس با ما</a></li>
                   {Loginuser && Loginuser['token'] && <li><a href ="/panelAdmin">پنل ادمین</a></li>}
            
                </ul>
            </nav>
        </div>    
        


        <Switch>
          <Route path="/" exact component={Login}/>
          <Route path="/panelAdmin" exact component={Admin}/>
          <Route path="/pageAdmin" exact component={pageadmin}/>
          <Route path="/users" exact component={Users}/>
       </Switch>

      </div>
    </BrowserRouter>
  );
}

export default App;
