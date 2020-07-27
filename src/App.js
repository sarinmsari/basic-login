import React from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import login from './components/login';
import register from './components/register';
import dashboard from './components/dashboard';
function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/login" component={login} />
        <Route path="/register" component={register} />
        <Route path="/dashboard" component={dashboard} />
        <Redirect to="/login" />
      </Switch>
    </HashRouter>
  );
}

export default App;
