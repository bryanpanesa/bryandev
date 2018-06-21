import React, { Component } from 'react';
import './css/jumbotron.css';

class Intro extends Component {
    render() {
        return(
            <div className="hero is-medium has-text-centered">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title is-uppercase">Web / UI / UX Design</h1>
                        <p className="subtitle has-text-grey-dark is-size-6 has-text-centered">Projects & stuff made in 
                            <strong> Web Development</strong>, 
                            <strong> User Interface Design</strong> & 
                            <strong> User Experience Design</strong>.
                        </p>
                    </div>
                </div>
            </div>
            
        );
    }
}

export default Intro;