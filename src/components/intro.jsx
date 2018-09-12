import React, { Component } from 'react';
import './css/jumbotron.css';

class Intro extends Component {
    render() {
        return(
            <section className="hero has-text-centered is-bold">
                <div className="hero-body">
                    <div className="container">
                        {/* <h1 className="title is-uppercase">Web / UI Design</h1> */}
                        <p className="subtitle has-text-grey-dark is-size-4 has-text-centered">Projects & stuff made in 
                            <strong> Web Development</strong>, 
                            <strong> & User Interface Design</strong>
                        </p>
                    </div>
                </div>
            </section>
            
        );
    }
}

export default Intro;