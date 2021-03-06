import React, { Component } from 'react';

//Components
import Navbar from '../components/navbar.jsx';
import Footer from '../components/footer.jsx';
import Projects from '../components/projects.jsx';

class Home extends Component {
    render() {
        return(
            <div>
                <Navbar />
                <Projects />
                <Footer />
            </div>
        );
    }
}

export default Home;