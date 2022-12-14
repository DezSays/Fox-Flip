import React from "react";

const Logout = ({setNavbarState}) => {

  return (
  <div>
    <button onClick={() => setNavbarState(0)}>
      logout
    </button>
  </div>
  )
};

export default Logout;
