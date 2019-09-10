import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';

import Header from './Header';
import Home from './Home';
import SignUp from './SignUp';
import SignIn from './SignIn';
import Dashboard from './Dashboard';
import reducers from '../reducers';

const App = () => (
  <div>
    <Provider store={createStore(reducers, {}, applyMiddleware(reduxThunk))}>
      <BrowserRouter>
        <Header />
        <Route path='/' exact component={Home} />
        <Route path='/signup' exact component={SignUp} />
        <Route path='/signin' exact component={SignIn} />
        <Route path='/dashboard' exact component={Dashboard} />
      </BrowserRouter>
    </Provider>
  </div>
);

export default App;
