import React, { Component } from 'react';
import './login.css';

import axios from '../axios/base';
class Login extends Component {

    usernameInput = null;
    passInput = null;

    onSubmit = (e) => {
        e.preventDefault();
        let email = this.usernameInput.value;
        let password = this.passInput.value;
        let data = { email, password };

        if (email == 'eve.holt@reqres.in' && password == 'cityslicka') {
            axios.post('https://reqres.in/api/login', data)
                .then((respons) => {
                    this.saveLoginData(respons.data);
                    console.log(respons);


                })
                .catch((err) => {
                    console.log(err);
                });

        }
        else {
            alert('اطلاعات وارد شده اشتباه است')
        }
    }

    saveLoginData = (userData) => {
        // let data1 ={
        let token = userData.token
        //   };
        localStorage.setItem('users', JSON.stringify(token));
        this.props.history.push('/pageAdmin');
    }

    render() {
        return (
            <form>
                <div className="login">
                    <div className="login-head">LOGIN</div>
                    <div className="login-body">

                        <span className="usericon"></span>
                        <input
                            defaultValue="eve.holt@reqres.in"
                            ref={el => this.usernameInput = el} type="text" className="inputuser" placeholder="نام کاربری را وارد نمایید" />


                        
                            <span className="passicon"></span>
                            <input
                                defaultValue="cityslicka"
                                ref={el => this.passInput = el} type="password" placeholder="رمز عبور را وارد کنید" className="inputpass" />

                        
                        <div>
                            <button className="login-btn" onClick={this.onSubmit}>LOGIN</button>

                        </div>
                    </div>
                </div>
            </form>
        );
    }

}
export default Login;