import React, { Component } from 'react';

//Components
import Navbar from '../components/navbar.jsx';
import Footer from '../components/footer.jsx';
import Intro from '../components/intro.jsx';

class Home extends Component {
    render() {
        return(
            <div>
                <Navbar title="Bryan Panesa" />
                <Intro />
                <Footer />
            </div>
        );
    }
}

export default Home;