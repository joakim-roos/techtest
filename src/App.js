import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Salon from './components/Salon'
import SalonList from './components/SalonList'


function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Switch>

          <Route exact path="/salons/:slug">
            <Salon />
          </Route>

          <Route exact path="/salons">
            <SalonList />
          </Route>

          <Redirect from='/' to="/salons" />

        </Switch>
      </BrowserRouter>
    </div >
  );
}

export default App;
