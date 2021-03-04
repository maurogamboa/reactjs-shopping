import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from "react-redux";
import store from "./store/store"
import SignUp from './components/SignUp';
import UserProfile from './components/UserProfile';
import Login from './components/LoginView';
import Home from './components/Home';
import AuthRoute from './routes/AuthRoute';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
        <Route path="/login" component={Login} />
          <AuthRoute path="/myprofile" component={UserProfile} />
          <Route path="/signup" component={SignUp} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
