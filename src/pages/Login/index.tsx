import React from 'react';

import logo from '../../assets/images/logo.svg';
import background from '../../assets/images/success-background.svg';
import heartIcon from '../../assets/images/icons/purple-heart.svg';

import './styles.css';
import Input from './../../components/Input/index';
import { Link } from 'react-router-dom';

function Login(){
    return (
        <div id="page-login">
            <div className="login-container">
                <div className="logo-background" style={{
                    backgroundImage: `url(${background})`,
                    backgroundSize: 'contain',                    
                }}>
                    <img src={logo} alt="Proffy"/>
                    <h2>Sua plataforma de estudos online.</h2>
                </div>

                <div className="login">
                    <h1>Fazer login</h1>
                    
                    <form className="login-form">
                        <div className="input-block">
                            <Input label="" placeholder="E-mail" name="email" />
                            <Input type="password" label="" placeholder="Senha" name="password" />
                        </div>

                        <div className="remember-me">
                            <div className="checkbox-container">
                                <input id="checkbox-remember" type='checkbox' name='remember'/>
                                <label htmlFor="checkbox-remember">Lembrar-me</label>
                            </div>

                            <Link to="/">Esqueci minha senha</Link>
                        </div>

                        <div className="login-button">
                            <button type="submit">Entrar</button>
                        </div>
                    </form>

                    <footer className="login-footer">
                        <div className="no-account">
                            <p>Não tem conta?</p>
                            <Link to="/">Cadastre-se</Link>
                        </div>

                        <div className="free">
                            <p>É de graça </p>
                            <img src={heartIcon} alt="Coração roxo"/>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    );
}

export default Login;