import React, { useState } from "react"
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

export const authCotext = React.createContext({});
function App() {
  const [userAuth, setUserAuth] = useState({})
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
