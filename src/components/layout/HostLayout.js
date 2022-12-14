import React from 'react'
import HostNavbar from '../navbars/HostNavbar.js'

const HostLayout = ({children}) => {
  return (
    <>
    <HostNavbar />
    {children}
    </>
  )
}

export default HostLayout