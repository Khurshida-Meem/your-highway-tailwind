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
import AuthProvider from './contexts/AuthProvider';
import AddBlog from './Pages/Dashboard/AddBlog/AddBlog';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';

function App() {
  return (
    <AuthProvider>
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
          <Route path="/add_blog">
            <AddBlog />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router >
    </AuthProvider>
  );
}

export default App;
