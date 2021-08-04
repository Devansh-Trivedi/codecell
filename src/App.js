import React,{useEffect,createContext,useReducer,useContext} from 'react';

import {BrowserRouter,Route,Switch,useHistory,Redirect} from 'react-router-dom'

import Index from "views/Index.js";
import LandingPage from "views/examples/LandingPage.js";
import RegisterPage from "views/examples/RegisterPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
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