import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import axios from 'axios'

import Salon from './components/Salon'
import SalonList from './components/SalonList'

import { API_URL, SALONS, TOKEN } from '././constants/routes'

function App() {
  const [allSalons, setAllSalons] = useState([])

  // Fetches all salon-data when the component mounts. 
  // Adds the data to the allSalons-state. 
  useEffect(() => {
    const fetchAllSalons = () => {
      axios.get(`${API_URL}${SALONS}`, {
        headers: { Authorization: `Bearer ${TOKEN}` }
      })
        .then(res => {
          setAllSalons(res.data)
        })
        .catch(error => {
          console.log(error)
        })
    }
    fetchAllSalons()
  }, [])

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/salons/:slug">
          <Salon />
        </Route>
        <Route exact path="/salons">
          <SalonList allSalons={allSalons} />
        </Route>
        <Redirect from='/' to="/salons" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
