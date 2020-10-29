import React, { Fragment } from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'

import './App.css';

// Rutas de la aplicacion
import Routes from './Routes.js'

//  Componentes
      // Navbar
import Navbar from './components/Navbar'
      // Slider
import Sidelbar from './components/Sidelbar'

const App = () => {




  return (
    <Fragment>
      <Router>
         <Navbar />
         <div className="container__app">
         <Sidelbar />
          <Switch>
          { Routes }
          </Switch>          
          </div>
      </Router>
    </Fragment>
  );
}

export default App;
