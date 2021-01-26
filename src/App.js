import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import pages
import Home from './pages/Home';
import About from './pages/About';
import HowTo from './pages/HowTo';
import History from './pages/History';
import SingleSmoothie from './pages/SingleSmoothie';
import Error from './pages/Error';

// import components
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Modal from './components/Modal';

import {useGlobalContext} from './context';

const App = () => {

  return (
    <Router>
      <Modal />
      <Navbar />
      <Sidebar />

      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>

        <Route path='/history'>
          <History />
        </Route>

        <Route path='/about'>
          <About />
        </Route>

        <Route path='/howto'>
          <HowTo />
        </Route>

        <Route path='/smoothie/:id'>
          <SingleSmoothie />
        </Route>

        <Route path='*'>
          <Error />
        </Route>

      </Switch>
    </Router>
  )
}

export default App;
