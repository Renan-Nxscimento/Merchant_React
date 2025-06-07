import React, { useEffect, useState } from 'react'
import Login from '../components/forms/Login'
import CreateUser from '../components/forms/CreateUser'
import QualitiesString from '../components/home/QualitiesString'
import fetchApi from '../axios/config';
import './userLogin.css'

const UserLogin = () => {
  const [registring, isRegistring] = useState(false)

  return (
    <div className=' login-adjust user-login flex-column d-flex align-items-center justify-content-center'>
      {
        registring? (
          <CreateUser isRegistring={isRegistring}/>
        ) : (
          <Login isRegistring={isRegistring}/>
        )
      }
      <QualitiesString/>
    </div>
  )
}

export default UserLogin
