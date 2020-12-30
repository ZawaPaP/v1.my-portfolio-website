import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import Blog from './components/pages/Blog';
import Contact from './components/pages/Contact';
import Maintenances from './components/pages/Maintenances'
import PrivacyPolicy from './components/pages/PrivacyPolicy'

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services' exact component={Services} />
        <Route path='/products' exact component={Products} />
        <Route path='/blog' exact component={Blog} />
        <Route path='/contact' exact component={Contact} />
        <Route path='/maintenances' exact component={Maintenances} />
        <Route path='/policy' exact component={PrivacyPolicy} />

      </Switch>
      </Router>
    </>
  );
}

export default App;
