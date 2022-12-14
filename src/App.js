import React,{ useState, useEffect }  from "react";
import './index.css';
import LandingPage from './LandingPage.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserLayout from './components/layout/UserLayout.js'
import HostLayout from './components/layout/HostLayout.js'
import GenericLayout from './components/layout/GenericLayout.js'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import UserDashboard from './components/dashboards/UserDashboard.js'
import Logout from './components/auth/Logout.js'
import HostDashboard from './components/dashboards/HostDashboard.js'
import CreateGame from './components/CreateGame.js'
import PlayGame from './components/PlayGame.js'
import Login from './components/auth/Login.js'
import Registration from './components/auth/Registration.js'
import CreateCategory from "./components/CreateCategory";
import FooterLayout from "./components/layout/FooterLayout";
import AboutUs from "./components/AboutUs";
import HostNavbar from "./components/navbars/HostNavbar";
import UserNavbar from "./components/navbars/UserNavbar";



function App() {
    const [navbarState, setNavbarState] = useState(0);
    const [myUserName, setmyUserName] = useState()
    const [loggedInUser, setLoggedInUser] = useState("not logged in");



    useEffect(() => {
      const data = localStorage.getItem('my-navbar-state');
      if (data){
        setNavbarState(JSON.parse(data));
      }
      else{
        setNavbarState(0)
      }
    }, []);
  
    useEffect(() => {
      localStorage.setItem("my-navbar-state", JSON.stringify(navbarState));
    });

    useEffect(() => {
      const userLoggedIndata = localStorage.getItem('my-user-state');
      if (userLoggedIndata){
        setLoggedInUser(JSON.parse(userLoggedIndata));
      }
      else{
        setLoggedInUser('no logged in user...')
      }
    }, []);
  
    useEffect(() => {
      localStorage.setItem("my-user-state", JSON.stringify(loggedInUser));
      setmyUserName(loggedInUser)
    });

    if(navbarState === 0){
                                                          //this is generic
        console.log("this is navbarstate "+navbarState)
        return (
        <Router>
          <GenericLayout loggedInUser={loggedInUser} >
            <Routes myUserName={myUserName}>
              <Route path='/' element={<LandingPage />} />
              <Route path='/Login'        element={<Login loggedInUser={loggedInUser} setNavbarState={setNavbarState} setLoggedInUser={setLoggedInUser}/>} />
              <Route path='/Registration' element={<Registration setNavbarState={setNavbarState}   loggedInUser={loggedInUser}        setLoggedInUser={setLoggedInUser}/>} />
            </Routes>
          </GenericLayout>
          <FooterLayout>
            <Routes>
              <Route path ='/AboutUs' element={<AboutUs />} />
            </Routes>
          </FooterLayout>
        </Router>
      );
    }

    if(navbarState === 1){
                                                              //this is User
      console.log("this is navbarstate "+navbarState)
        return(
            <Router>
            <UserLayout loggedInUser={loggedInUser}>
            <Routes myUserName={myUserName}>
              <Route path='/UserDashboard' element={<UserDashboard />} />
              <Route path='/Logout' element={<Logout setNavbarState={setNavbarState}  />} />
            </Routes>
          </UserLayout>
          <FooterLayout>
            <Routes>
              <Route path ='/AboutUs' element={<AboutUs />} />
            </Routes>
          </FooterLayout>
          </Router>
        );
    }
    if(navbarState === 2){
                                                              //this is Host
      console.log("this is navbarstate "+navbarState)
        return(
            <Router>
            <HostLayout loggedInUser={loggedInUser}>
            <Routes  myUserName={myUserName}>
              <Route path='/HostDashboard' element={<HostDashboard />} />
              <Route path='/CreateCategory' element={<CreateCategory loggedInUser={loggedInUser}  />} />
              <Route path='/CreateGame' element={<CreateGame />} />
              <Route path='/PlayGame' element={<PlayGame />} />
              <Route path='/Logout' element={<Logout setNavbarState={setNavbarState}   />} />
            </Routes>
          </HostLayout>
          <FooterLayout>
            <Routes>
              <Route path ='/AboutUs' element={<AboutUs />} />
            </Routes>
          </FooterLayout>
           </Router>
        );
    }
}
export default App;