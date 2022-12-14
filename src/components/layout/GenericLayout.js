import React from 'react'
import GenericNavbar from '../navbars/GenericNavbar.js'

const GenericLayout = ({children}) => {
  return (
    <>
    <GenericNavbar />
    {children}
    </>
  )
}

export default GenericLayout