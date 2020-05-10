import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import axios from 'axios'

import Salon from './components/Salon'
import SalonList from './components/SalonList'

import { API_URL, SALONS } from '././constants/routes'

/* 
  Hi, Joakim here! I hope you like these parts for the hairsalon app. 
  I decided to use json-server for the data, and requesting this with axios.
  I also use react-router-dom, react-select (for the select/option component).
  To run "npm run json-server" and "npm run dev" i'm using "concurrently (see json.package).
  It runs these two scripts when you run "npm start". 

  I tried to make the application as close to the assets as possible, checking font-sizes, paddings etc. 

  All desired functions should work.

  Please be aware that I made this application for mobile-first (not ipad). 

  I really hope you like it :) 
*/

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
    <div>
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
    </div>
  );
}

export default App;
