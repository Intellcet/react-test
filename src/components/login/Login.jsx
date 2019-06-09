import React, {PureComponent} from 'react';
import './login.css';
import LoginManager from "../../managers/login/loginManager";
import {Redirect} from "react-router-dom";

class Login extends PureComponent{

    constructor(props) {
        super(props);
        this.loginManager = new LoginManager({});
        this.state = {
            login: '',
            password: '',
            passed: false
        };
        this.passwordInputHandler = this.passwordInputHandler.bind(this);
    }

    loginInputHandler(e) {
        const value = e.target.value;
        this.setState({login: value});
    }

    passwordInputHandler(e) {
        const value = e.target.value;
        this.setState({password: value});
    }

    login() {
        const login = this.state.login;
        const password = this.state.password;
        if (login && password) {
            const canLogin = LoginManager.checkLogin({ login, password });
            if (canLogin) {
                this.setState({passed: true});
            }
        }
    }

    render(history) {
        if (this.state.passed) {
            return(
                <Redirect to='/main' />
            );
        }
        return(
            <section className="login-section">
                <section className='login-section-container'>
                    <p className='login-text'>Авторизация</p>
                    <section className='login-section-wrapper'>
                        <input className='login-input enter-login' type='text' value={this.state.login} onChange={(e) => this.loginInputHandler(e)} placeholder='Enter Login' />
                        <input className='login-input enter-password' type='password' value={this.state.password} onChange={this.passwordInputHandler} placeholder='Enter Password' />
                        <button className='login-input login-btn' onClick={() => this.login()}>Войти</button>
                    </section>
                </section>
            </section>
        );
    }
}

export default Login;