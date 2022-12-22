import React from 'react'
import { Link } from 'react-router-dom'

import PlayGame from '../PlayGame'
import CreateCategory from '../CreateCategory'

const HostDashboard = () => {
  return (
    <>
        <div>HostDashboard</div>
        <Link to="/PlayGame" style={{color: "green"}} element={<PlayGame />} className='path'>Play Game Page</Link>
        <Link to="/CreateCategory" style={{color: "green"}} element={<CreateCategory/>} className='path'>create category</Link>

    </>
  )
}

export default HostDashboard