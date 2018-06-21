import React, { Component } from 'react';

//Components
import Navbar from '../components/navbar';
import Footer from '../components/footer';

class Contact extends Component {
    render() {
        return(
            <div>
                <Navbar />
                    <div className="container">
                        <h1>Contacts</h1>
                        <p>09215354357</p>
                    </div>
                <Footer />
            </div>
        );
    }
}
export default Contact;