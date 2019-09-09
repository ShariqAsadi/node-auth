import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import Header from './Header';
import Home from './Home';
import SignUp from './SignUp';
import SignIn from './SignIn';
import Dashboard from './Dashboard';

const App = () => (
  <div>
  <BrowserRouter>
    <Header />
    <Route path='/' exact component={Home} />
    <Route path='/signup' exact component={SignUp} />
    <Route path='/signin' exact component={SignIn} />
    <Route path='/dashboard' exact component={Dashboard} />
  </BrowserRouter>
  </div>
);

export default App;