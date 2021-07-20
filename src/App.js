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

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/login" component={Login} />
        <Route path="/admin" component={Admin} />
      </Switch>
    </Router>
  );
}

export default App;
