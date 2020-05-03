import { Router, Redirect } from '@reach/router';
import React from 'react';
import './App.css';
import LeadFormPage from './pages/lead/lead-form';
import LeadSuccessPage from './pages/lead/lead-success';

function App() {
  return (
    <Router basepath="/">
      <LeadFormPage path="lead" />
      <LeadSuccessPage path="leadsuccess" />
      <Redirect from="**" to="lead" />
    </Router>
  )
    
}

export default App;
