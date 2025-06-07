import React, { useContext, useState } from 'react'
import fetchApi from '../../axios/config';
import {UserContext} from '../../App'

const CreateUser = ({isRegistring}) => {
      const {thisUser, setThisUser} = useContext(UserContext)
      const [name, setName] = useState('')
      const [email, setEmail] = useState('')
      const [nickname, setNickname] = useState('')
      const [password, setPassword] = useState('')
      const [image, setImage] = useState('')
      const [favoriteProducts, setFavoriteProducts] = useState([])
      const [cart, setCart] = useState([])
      const [showPassword, setShowPassword] = useState(false)

    const togglePassword = () => {
     setShowPassword(!showPassword);
    }

    const goLogin = () => {
        isRegistring(false)
    }

    const located = (database) => {
        setThisUser(database)
        window.location.href=`/`
    }

        const createUser = async (e) => {
            e.preventDefault()

        try {
            const user = {
                name,
                nickname,
                email,
                password,
                image,
                favoriteProducts,
                cart,
            }
    
            const res = await fetchApi.post('/users', user)
    
            if(res.status === 201) {
                localStorage.setItem('username', user.nickname)
                localStorage.setItem('email', user.email)
    
                console.log(res.data.msg)
                located(user)
            }
            
        } catch (error) {
            console.log(error.response.data.msg, 'error')
        }
    }
    
  return (
    <div className='user-form-container register d-flex flex-column align-items-center justify-content-center'>
      <h2>Crie sua conta</h2>
      <form onSubmit={(e) => createUser(e)} className='user-form d-flex flex-column'>
        <label htmlFor="">
            <span>Nome:</span>
            <input 
            type="text" 
            placeholder='Insira seu nome' 
            required 
            onChange={(e) => setName(e.target.value)}
            />
        </label>
        <label htmlFor="">
            <span>Apelido</span>
            <input 
            type="text" 
            placeholder='Como posso te chamar?' 
            required 
            onChange={(e) => setNickname(e.target.value)}
            />
        </label>
        <label htmlFor="">
            <span>E-mail</span>
            <input 
            type="email" 
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
        <label htmlFor="">
            <span>Imagem de usuário</span>
            <input 
            type="text" 
            placeholder='Insira a URL de uma imagem' 
            onChange={(e) => setImage(e.target.value)}
            />
        </label>
        <input className='form-btn' type="submit" value="Criar perfil" />
        <span className='create-account'>Já tem uma conta? 
            <a href="#" onClick={goLogin}>Acesse já</a>
            </span>
      </form>
    </div>
  )
}

export default CreateUser
