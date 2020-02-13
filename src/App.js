import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';
import {Route} from "react-router-dom";

const App = () => (

  <div>
    <Route exact path='/Home' component={Home} />
    <Route exact path='/About' component={About} />
    <Route exact path='/Contact' component={Contact} />
    <Navigation />
  </div>
);

export default App;
