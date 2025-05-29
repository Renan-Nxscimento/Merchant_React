import React, { useContext, useEffect, useState } from 'react';
import fetchApi from '../../axios/config';
import { Link, useNavigate } from 'react-router-dom';
import {UserContext} from '../../App'

const Login = () => {
    const {setThisUser} = useContext(UserContext)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const userLogin = async (e) => {
        e.preventDefault();

        try {
            const res = await fetchApi.get('/users');

            if (res.status === 200) {
                const foundUser = res.data.find(u => 
                    u.email === email && u.password === password
                );

                if (foundUser) {
                    console.log('Login successful:', foundUser);
                    localStorage.setItem('username', foundUser.nickname)
                    localStorage.setItem('email', foundUser.email)
                    setThisUser(foundUser)
                    navigate('/');
                } else {
                    console.log('Invalid email or password');
                }
            }
        } catch (error) {
            console.log(error.response.data.msg, 'error');
        }
    };

    return (
        <div className='user-form-container d-flex flex-column align-items-center justify-content-center'>
            <h2>Entrar</h2>
            <form className='user-form d-flex flex-column' onSubmit={userLogin}>
                <label htmlFor="">
                    <span>E-mail</span>
                    <input 
                        type="text" 
                        placeholder='Qual seu email?' 
                        required
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <label htmlFor="">
                    <span>Senha:</span>
                    <input 
                        type="password" 
                        placeholder='Insira sua senha' 
                        required
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <span className="form-message"></span>
                <input className='form-btn' type="submit" value="Fazer login"/>
                <span className='create-account'>Não tem uma conta? <Link>Cadastre-se</Link></span>
            </form>
        </div>
    );
};

export default Login;
