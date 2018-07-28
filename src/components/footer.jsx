import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../node_modules/bulma/css/bulma.min.css';
import './css/footer.css';

class Footer extends Component {
    render() {
        return(
            <footer className="footer hero">
                <div className="hero-body">
                    <div className="container">
                        <div className="columns has-text-centered">
                            <div className="column is-7">
                                <p className="title is-4">
                                    <strong><Link className="has-text-black" to="/">Bryan Panesa </Link></strong>
                                    <span className="has-text-grey">
                                        &#169; {new Date().getFullYear()}
                                    </span>
                                </p>
                                <p className="subtitle">Let's connect!</p>
                            </div>
                            <div className="column">
                                <a className="has-text-grey" href="https://www.facebook.com/IvexBrykzJayRo" title="Follow me @ivexbrykzjayro">
                                    <i className="fab fa-facebook fa-2x faa-vertical animated-hover" aria-hidden="true"></i>
                                </a>
                            </div>
                            <div className="column">
                                <a className="has-text-grey" href="https://www.instagram.com/bryanpanesa/" title="Follow me @bryanpanesa">
                                    <i className="fab fa-instagram fa-2x faa-vertical animated-hover" aria-hidden="true"></i>
                                </a>
                            </div>
                            <div className="column">
                                <a className="has-text-grey" href="https://twitter.com/ivexbrykzjayro" title="Follow me @ivexbrykzjayro">
                                    <i className="fab fa-twitter fa-2x faa-vertical animated-hover" aria-hidden="true"></i>
                                </a>
                            </div>
                            <div className="column">
                                <a className="has-text-grey" href="mailto:bryanjay.panesa@gmail.com" title="Shoot me an email!">
                                    <i className="fa fa-envelope fa-2x faa-vertical animated-hover" aria-hidden="true"></i>
                                </a>
                            </div>
                            <div className="column">
                                <a className="has-text-grey" href="http://linkedin.com/in/bryan-jay-b-panesa-26874512a" title="Check out my Linkedin profile!">
                                    <i className="fab fa-linkedin fa-2x faa-vertical animated-hover" aria-hidden="true"></i>
                                </a>
                            </div>
                            <div className="column">
                                <a className="has-text-grey" href="https://github.com/bryanpanesa" title="Check out my GitHub profile!">
                                    <i className="fab fa-github fa-2x faa-vertical animated-hover" aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;