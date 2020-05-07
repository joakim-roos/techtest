import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import axios from 'axios'

import Salon from './components/Salon'
import SalonList from './components/SalonList'


import { API_URL, SALONS } from '././constants/routes'


function App() {

  useEffect(() => {
    const fetchAllSalons = () => {
      axios.get(`${API_URL}${SALONS}`)
        .then(res => {
          console.log(res.data)
        })
        .catch(error => {
          console.log(error)
        })
    }
    fetchAllSalons()
  }, [])

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
