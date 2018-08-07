import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

//Pages
import Home from './pages/home.jsx';
import About from './pages/about.jsx';
import Contact from './pages/contact.jsx';

//Projects
import Bfp from './pages/projects/bfp.jsx';
import Phagebiotics from './pages/projects/phagebiotics.jsx';
import Gogon from './pages/projects/gogon.jsx';
import Typeab from './pages/projects/typeab.jsx';
import Inventory from './pages/projects/inventory.jsx';
import Presidents from './pages/projects/presidents.jsx';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/projects/bfp" component={Bfp} />
          <Route path="/projects/phagebiotics" component={Phagebiotics} />
          <Route path="/projects/gogon" component={Gogon} />
          <Route path="/projects/typeab" component={Typeab} />
          <Route path="/projects/inventory" component={Inventory} />
          <Route path="/projects/presidents" component={Presidents} />
        </div>
      </Router>
    );
  }
}

export default App;
