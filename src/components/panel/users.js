
import React, {Component} from 'react';

import axios from '../axios/base';
import User from './User';
class Users extends Component{
    state = {
        users: []
    }

    render(){
        return(
            <div className="users">
                {this.renderUsers()}
            </div>
        );
    }

    
    getlist = () => {
        //https://jsonplaceholder.typicode.com/posts
        axios.get('https://reqres.in/api/users?page=2')
            .then(Response => {
                this.setState(oldstate => ({
                    ...oldstate, users: Response.data.data
                })
                );
            })
            .catch(err => {
                console.log(err);
            })
    }

    renderUsers = () => {
        return this.state.users.map(item => (
            <User key={item.id} user={item} />
        ));
    }

    componentDidMount() {
        this.getlist();
    }
}
export default Users;