import React, { useEffect, useState } from 'react'

const User = () => {
    const [user, setUser] = useState([])
    const name = user.name || ''
    
            const fetchData = () => {
                fetch('http://localhost:4000/user')
                .then(res => res.json())
                .then(data => {
                  setUser(data)
                })

                .catch(e => console.log(e.message))
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
                fetchData()
              }, [])

              const abbreviatedName = abbreviate(name)

              const secondName = second(name)


  return (
    <div className="user-header d-flex dropdown">
        <a href="#"
        className='nav-link nav-profile d-flex align-items-center pe-0'
        data-bs-toggle='dropdown'
        >
            <img src={user.userimage} alt="Profile" className='rounded-circle' id='userImage'/>
            <span className='d-none d-md-block dropdown-toggle ps-2' id='userName'>{abbreviatedName}</span>
        </a>

        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
            <li className="dropdown-header">
                <h6>{secondName}</h6>
                <span>{user.nickname}</span>
            </li>
            <li>
                <hr className="dropdown-divider" />
            </li>

            <li>
                <a 
                href="users.profile.html"
                className='dropdown-item d-flex align-items-center'
                >
                    <i className="bi bi-heart">
                        <span>Favoritos</span>
                    </i>
                </a>
            </li>
            <li>
                <hr className="dropdown-divider" />
            </li>

            <li>
                <a 
                href="users.profile.html"
                className='dropdown-item d-flex align-items-center'
                >
                    <i className="bi bi-question-circle">
                        <span>Need Help?</span>
                    </i>
                </a>
            </li>
            <li>
                <hr className="dropdown-divider" />
            </li>

            <li>
                <a 
                href="users.profile.html"
                className='dropdown-item d-flex align-items-center'
                >
                    <i className="bi bi-box-arrow-right">
                        <span>Sign Out</span>
                    </i>
                </a>
            </li>
        </ul>
    </div>
  )
}

export default User
