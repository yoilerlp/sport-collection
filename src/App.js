import React, { useState, useEffect } from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from "./pages/Login";
import Landing from "./pages/Landing";
import Admin from "./pages/Admin";
import { getToken } from './util/jwtHandler'

export const authCotext = React.createContext({});
function App() {
  const [userAuth, setUserAuth] = useState({})

  useEffect(() => {
    try {
      const jwt = getToken()
      setUserAuth(jwt.userData)
      
    } catch (error) {
        console.log(error)
    }
  },[])

  return (
    <Router>
      <authCotext.Provider value={{userAuth,setUserAuth}}>
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/login" component={Login} />
          <Route path="/admin" component={Admin} />
        </Switch>
      </authCotext.Provider>
    </Router>
  );
}

export default App;
