
import React, { useEffect, useState } from "react";

const Login = ({setNavbarState}) => {

  return (
    <>
    <div>
      Login
    {/* <p>You clicked {navbarState} times</p> */}
    <button onClick={() => setNavbarState(1)}>
      login as user
    </button>
    <button onClick={() => setNavbarState(2)}>
      login as host
    </button>
  </div>
  </>
  )
}

export default Login