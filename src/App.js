import React, { Component } from 'react';
import { Route, HashRouter, Switch } from 'react-router-dom';
import './App.css';

//Pages
import Home from './pages/home.jsx';
import About from './pages/about.jsx';
import Contact from './pages/contact.jsx';
import Photography from './pages/photography.jsx';

//Projects
import Bfp from './pages/projects/bfp.jsx';
import Phagebiotics from './pages/projects/phagebiotics.jsx';
import Gogon from './pages/projects/gogon.jsx';
import Typeab from './pages/projects/typeab.jsx';
import Inventory from './pages/projects/inventory.jsx';
import Presidents from './pages/projects/presidents.jsx';
import Positiv from './pages/projects/positiv.jsx';
import Collab from './pages/projects/collab.jsx';
import Letgo from './pages/projects/letgo.jsx';
import Oilprice from './pages/projects/oilprice.jsx';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/projects/bfp" component={Bfp} />
          <Route path="/projects/phagebiotics" component={Phagebiotics} />
          <Route path="/projects/gogon" component={Gogon} />
          <Route path="/projects/typeab" component={Typeab} />
          <Route path="/projects/inventory" component={Inventory} />
          <Route path="/projects/presidents" component={Presidents} />
          <Route path="/projects/positiv" component={Positiv} />
          <Route path="/projects/collab" component={Collab} />
          <Route path="/projects/letgo" component={Letgo} />
          <Route path="/projects/oilprice" component={Oilprice} />
          <Route path="/photography" component={Photography} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
