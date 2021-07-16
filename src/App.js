import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Login from "./pages/Login";
import Landing from "./pages/Landing";
import Home from "./pages/Home";


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route  path="/login" component={Login} />
        <Route path="/home" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
