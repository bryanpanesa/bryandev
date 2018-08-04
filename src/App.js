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
        </div>
      </Router>
    );
  }
}

export default App;
