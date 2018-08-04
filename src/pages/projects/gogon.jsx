import React, { Component } from 'react';

//Components
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Header from '../../components/header';

class Gogon extends Component {
    render() {
        return(
            <div>
            <Navbar />
            <Header />
            <Footer />
            </div>
        );
    }
}
export default Gogon;