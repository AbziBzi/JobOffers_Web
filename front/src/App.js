import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import JobOfferList from './components/JobOfferList';
import CompaniesPage from './pages/CompaniesPage';
import CompanyPage from './pages/CompanyPage';
import NavBar from './components/NavBar'

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/companies" exact component={CompaniesPage} />
          <Route path="/companies/:id" exact component={CompanyPage} />
          <Route path="/jobs" exact component={JobOfferList} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
