import React, { Component } from 'react';
import './css/bfp.css';

//Components
import '../../components/navbar';
import '../../components/footer';

class Bfp extends Component {
    render() {
        return(
            <Navbar firstName="Bryan" lastName="Panesa" />
            <p>asdsad</p>
            <Footer />
        );
    }
}

export default Bfp;