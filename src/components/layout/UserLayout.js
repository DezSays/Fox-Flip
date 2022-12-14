import React from 'react'
import UserNavbar from '../navbars/UserNavbar.js'

const UserLayout = ({children}) => {
  return (
    <>
    <UserNavbar />
    {children}
    </>
  )
}

export default UserLayout