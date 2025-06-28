import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import fetchApi from '../../axios/config';
import defaultImage from '../../../public/assets/user.png';
import {UserContext} from '../../App'

const User = () => {
    const {thisUser, setThisUser} = useContext(UserContext)
    const [users, setUsers] = useState([])
    const [name, setName] = useState(null)

    function logout() {
        localStorage.removeItem('username')
        localStorage.removeItem('email')
        window.location.href=`/`
    }

    const defaultUser = {
        name: "Entrar",
        email: "notregistred@example.com",
        password: 'unregistred',
        image: defaultImage
    }

              const abbreviate = function (name) {
                if (typeof name !== 'string') return ''
                var splitName = name.trim().split(' ')
                if (splitName.length > 1) {
                    return (splitName[0].charAt(0) + "." + " " + splitName[1])
                }
                return splitName[0]

              }

              const second = function (name) {
                if (typeof name !== 'string') return ''
                var splitName = name.trim().split(' ')
                if (splitName.length > 1) {
                    return (splitName[1])
                }
                return splitName[0]

              }
            
        useEffect(() => {
            const loadUsers = async () => {
            const res = await fetchApi.get(`/users`)

            setUsers(res.data)

            const email = localStorage.getItem('email')
            const username = localStorage.getItem('username')

            const userLocated = res.data.find(user =>
                user.email === email && user.nickname === username
            )
            
            if(userLocated) {
                setThisUser(userLocated)
                setName(userLocated.name)
            } else {
                setThisUser(defaultUser)
                setName(defaultUser.name)
            }
            }

          loadUsers()
        }, [])

        if (users.length === 0) return <p>Carregando...</p>

              const abbreviatedName = abbreviate(name)


  return (
    <div className="user-header d-flex dropdown">
        <a href="#"
        className='nav-link nav-profile d-flex align-items-center pe-0'
        data-bs-toggle='dropdown'
        >
            {
                thisUser.image ? (
                    <img src={thisUser.image} alt="user image" className='rounded-circle' id='userImage'/>
                ) : (
                    <img src={defaultImage} alt="user image" className='rounded-circle' id='userImage'/>
                )
            }
            <span className='d-none d-md-block dropdown-toggle ps-2' id='userName'>{abbreviatedName}</span>
        </a>

        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
            <li className="dropdown-header">
                <h6>{thisUser.name}</h6>
                {
                    thisUser &&
                    thisUser.nickname ? (
                    <span>{thisUser.nickname}</span>
                ) : (
                    <Link to={`/user`} className='go-to-user'>Entrar/Cadastrar-se</Link>
                    )
                }
            </li>
            <li>
                <hr className="dropdown-divider" />
            </li>

            {
                thisUser.email == defaultUser.email ? null : (
                <>
                    <li>
                        <Link 
                        to={`/Favorites`}
                        className='dropdown-item d-flex align-items-center'
                        >
                            <i className="bi bi-heart"></i>
                            <span>Favoritos</span>
                        </Link>
                    </li>
                    <li>
                        <hr className="dropdown-divider" />
                    </li>
                </>
                )
            }

            <li>
                <Link to='/contact' className='dropdown-item d-flex align-items-center'>
                    <i className="bi bi-question-circle"></i>
                    <span>Suporte</span>
                </Link>
            </li>

            {
                thisUser.email == defaultUser.email ? null : (
                <>
                    <li>
                        <hr className="dropdown-divider" />
                    </li>
                    <li>
                    <a
                    href='#'
                    className='dropdown-item d-flex align-items-center'
                    onClick={logout}
                    >
                        <i className="bi bi-box-arrow-right">
                            <span>Encerrar</span>
                        </i>
                    </a>
                    </li>
                </>
                )
            }
        </ul>
    </div>
  )
}

export default User
