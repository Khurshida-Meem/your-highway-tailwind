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
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import FullBlog from './Pages/Home/Blogs/FullBlog/FullBlog';
import AllPlaces from './Pages/AllPlaces/AllPlaces';

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
          <Route path="/all_places">
            <AllPlaces />
          </Route>
          <PrivateRoute path='/blog/:blogId'>
            <FullBlog />
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router >
    </AuthProvider>
  );
}

export default App;
