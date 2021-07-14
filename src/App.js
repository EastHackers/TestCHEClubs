// Compete rendering of the website, including displaying pages with certain elements in the URL

import React from 'react';
import { HomePage } from './HomePage/HomePage';
import { Route, Switch} from 'react-router-dom';
import {SearchResults} from './SearchResults/SearchResults';
import {ClubsList} from './ClubsList/ClubsList'

function App() {
  return (
    <Switch>
      {/*Pages displayed whent the URL starts with certain components */}
      <Route path = '/TestCHEClubs/clubslist' component={ClubsList}/>
      <Route path = '/TestCHEClubs/search' component={SearchResults}/>
      <Route path = '/TestCHEClubs/' component={HomePage}/>
    </Switch>
  );
}

export default App;