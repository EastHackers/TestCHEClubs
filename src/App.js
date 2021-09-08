// Compete rendering of the website, including displaying pages with certain elements in the URL

import React from 'react';
import { HomePage } from './HomePage/HomePage';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import {SearchResults} from './SearchResults/SearchResults';
import {ClubsList} from './ClubsList/ClubsList'

function App() {
  return (
    <Router>
      <Switch>
        {/*Pages displayed whent the URL starts with certain components */}
        <Route path = '/clubslist' >
          <ClubsList/>
        </Route>
        <Route path = '/search' >
          <SearchResults/>
        </Route>
        <Route path = '/' >
          <HomePage/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;