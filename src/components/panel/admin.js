import React, { Component } from "react";

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Users from './users';
import pageadmin from './pageAdmin';

class Admin extends Component {
    render() {
        return (

            <div className="paneladmin">
                <BrowserRouter>
                    

                    <switch>
                        <Route path="/pageAdmin" exact component={pageadmin} />
                        <Route path="/users" exact component={Users} />
                        
                    </switch>
                </BrowserRouter>
            </div>

        );
    }

}
export default Admin;