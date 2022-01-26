import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import SignIn from './Pages/SignIn/SignIn/SignIn';
import NotFound from './Pages/NotFound/NotFound';
import SignUp from './Pages/SignIn/SignUp/SignUp';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/sign_in">
          <SignIn />
        </Route>
        <Route path="/sign_up">
          <SignUp />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router >
  );
}

export default App;
