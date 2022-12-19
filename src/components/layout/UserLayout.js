import React from 'react'
import UserNavbar from '../navbars/UserNavbar.js'

import { useState } from 'react'
const UserLayout = ({children},props) => {

  //const [userNameAvatar, setUserNameAvatar] = useState(''); 
  const userNameAvatar = children.props.myUserName;

  console.log("below this is userLayout")
  console.log(props)
  console.log(children)
  console.log(children.props.myUserName)
  //setUserNameAvatar(children.props.myUserName)
  console.log('this is userNameAvatar '+ userNameAvatar)
  console.log("Above this is userLayout")
  return (
    <>
    <UserNavbar userNameAvatar={userNameAvatar} />
    {children}
    </>
  )
}

export default UserLayout