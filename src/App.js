import React,{useEffect,createContext,useReducer,useContext} from 'react';

import {BrowserRouter,Route,Switch,useHistory,Redirect} from 'react-router-dom'

import Index from "views/Index.js";
import LandingPage from "views/examples/LandingPage.js";
import RegisterPage from "views/examples/RegisterPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import Events from 'views/examples/Events';
import Gallery from 'views/examples/Gallery';
import Internships from 'views/examples/Internships';
import Team20_21 from 'views/examples/Team20_21';
import Team21_22 from 'views/examples/Team21_22';
const Routing = ()=>{
  
  return(
    
    <BrowserRouter>
    <Switch>
      <Route path="/components" render={(props) => <Index {...props} />} />
      <Route
        path="/landing-page"
        render={(props) => <LandingPage {...props} />}
      />
      <Route
        path="/register-page"
        render={(props) => <RegisterPage {...props} />}
      />
      <Route
        path="/profile-page"
        render={(props) => <ProfilePage {...props} />}
      />
      <Route
        path="/Events"
        render={(props) => <Events {...props} />}
      />
      <Route
        path="/Gallery"
        render={(props) => <Gallery {...props} />}
      />
      <Route
        path="/Internship"
        render={(props) => <Internships {...props} />}
      />
      <Route
        path="/Team21_22"
        render={(props) => <Team21_22 {...props} />}
      />
      <Route
        path="/Team20_21"
        render={(props) => <Team20_21 {...props} />}
      />
      <Redirect from="/" to="/landing-page" />
    </Switch>
  </BrowserRouter>
  )
}

function App() {
  return (
    <BrowserRouter>
      {/* <NavBar /> */}
      <Routing />
      
    </BrowserRouter>
  );
}

export default App;