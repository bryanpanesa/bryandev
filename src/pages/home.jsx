import React, { Component } from 'react';

//Components
import Navbar from '../components/navbar.jsx';
import Footer from '../components/footer.jsx';
import Intro from '../components/intro.jsx';
import Projects from '../components/projects.jsx';

class Home extends Component {
    render() {
        return(
            <div>
                <Navbar firstName="Bryan" lastName="Panesa"/>
                <Intro />
                <Projects />
                <Footer />
            </div>
        );
    }
}

export default Home;