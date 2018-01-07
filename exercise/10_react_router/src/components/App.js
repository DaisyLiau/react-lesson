import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Banner from './Banner';
import Menu from './Menu';
import Videos from './Videos';
import About from './About';
import Footer from './Footer';
import Overlay from './Overlay';

const App = () => (
  <Router>
    <div>
      <Banner />
      <Menu />
      <Route path="/vid" component={Videos} />
      <Route path="/about" component={About} />
      <Route path="/vid/:name" component={Overlay} />
    </div>
  </Router>
);

export default App;
