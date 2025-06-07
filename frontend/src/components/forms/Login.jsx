import React, { useContext, useEffect, useState } from 'react';
import fetchApi from '../../axios/config';
import {UserContext} from '../../App'

const Login = ({isRegistring}) => {
    const {setThisUser} = useContext(UserContext)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [incorrect, setIncorrect] = useState(false)
    const [showPassword, setShowPassword] = useState(false)

    const togglePassword = () => {
     setShowPassword(!showPassword);
    }

    const goRegister = () => {
        isRegistring(true)
    }

    const userLogin = async (e) => {
        e.preventDefault();

        const located = () => {
            window.location.href=`/`
        }

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
                    located()
                } else {
                    setIncorrect(true)
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
                    <div className="password-container d-flex align-items-center">
                        <input 
                        type={`${showPassword? "text" : "password"}`} 
                        placeholder='Insira sua senha' 
                        required
                        onChange={(e) => setPassword(e.target.value)}
                        />
                        <i 
                        className={`bi ${showPassword? "bi-eye-fill" : "bi-eye"}`}
                        onClick={togglePassword}
                        ></i>
                    </div>
                </label>
                <span className="form-message">
                    {
                        incorrect ? (<p>Senha ou email incorretos.</p>) : null
                    }
                </span>
                <input className='form-btn' type="submit" value="Fazer login"/>
                <span className='create-account'>Não tem uma conta? 
                    <a href='#' onClick={goRegister}>Cadastre-se</a>
                    </span>
            </form>
        </div>
    );
};

export default Login;
