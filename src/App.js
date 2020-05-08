import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import axios from 'axios'

import Salon from './components/Salon'
import SalonList from './components/SalonList'

import { API_URL, SALONS } from '././constants/routes'


function App() {
  const [allSalons, setAllSalons] = useState([])

  // Fetches all salon-data when the component mounts. 
  // Adds the data to the allSalons-state. 
  useEffect(() => {
    const fetchAllSalons = () => {
      axios.get(`${API_URL}${SALONS}`)
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
    <div className="wrapper">
      <BrowserRouter>
        <Switch>

          <Route exact path="/salons/:slug">
            <Salon />
          </Route>

          <Route exact path="/salons">
            <SalonList
              allSalons={allSalons}
            />
          </Route>

          <Redirect from='/' to="/salons" />

        </Switch>
      </BrowserRouter>
    </div >
  );
}

export default App;
