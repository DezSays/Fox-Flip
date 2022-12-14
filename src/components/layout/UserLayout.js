import React from 'react'
import UserNavbar from '../navbars/UserNavbar.js'

const UserLayout = ({children}) => {

  const userNameAvatar = children.props.myUserName;
  return (
    <>
    <UserNavbar userNameAvatar={userNameAvatar} />
    {children}
    </>
  )
}

export default UserLayout