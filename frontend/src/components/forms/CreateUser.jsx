import React from 'react'
import fetchApi from '../../axios/config';



const CreateUser = () => {
      const [name, setName] = useState('')
      const [email, setEmail] = useState('')
      const [password, setPassword] = useState('')
      const [image, setImage] = useState('')
      const [favoriteProducts, setFavoriteProducts] = useState([])
      const [cart, setCart] = useState([])

        const createUser = async (e) => {
            e.preventDefault()

        try {
            const user = {
                name,
                email,
                password,
                image,
                favoriteProducts,
                cart,
            }
    
            const res = await fetchApi.post('/users', user)
    
            if(res.status === 201) {
                navigate('/')
    
                console.log(res.data.msg)
            }
            
        } catch (error) {
            console.log(error.response.data.msg, 'error')
        }
    }
    
  return (
    <div className='user-form d-flex flex-column align-items-center justify-content-center'>
      <h2>Crie sua conta</h2>
      <form>
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
        <label htmlFor="">
            <span>Imagem de usuário</span>
            <input 
            type="text" 
            placeholder='Insira a URL de uma imagem' 
            onChange={(e) => setImage(e.target.value)}
            />
        </label>
        <input className='btn' type="submit" value="Criar perfil" />
      </form>
    </div>
  )
}

export default CreateUser
