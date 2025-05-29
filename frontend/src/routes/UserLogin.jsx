import React, { useEffect, useState } from 'react'
import Login from '../components/forms/Login'
import CreateUser from '../components/forms/CreateUser'
import QualitiesString from '../components/home/QualitiesString'
import fetchApi from '../axios/config';
import './userLogin.css'

const UserLogin = () => {

  return (
    <div className=' login-adjust user-login flex-column d-flex align-items-center justify-content-center'>
      <Login/>
      <QualitiesString/>
    </div>
  )
}

export default UserLogin
