import React from 'react'
import HostNavbar from '../navbars/HostNavbar.js'

const HostLayout = ({children}) => {
  const userNameAvatar = children.props.myUserName;
  return (
    <>
    <HostNavbar userNameAvatar={userNameAvatar}/>
    {children}
    </>
  )
}

export default HostLayout