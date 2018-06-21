import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../node_modules/bulma/css/bulma.min.css';
import './css/footer.css';

class Footer extends Component {
    render() {
        return(
            <footer class="footer hero">
                <div className="hero-body">
                    <div className="container">
                        <div className="columns has-text-centered">
                            <div className="column is-4 ">
                                <p className="title is-4">
                                    <strong><Link className="has-text-black" to="/">Bryan Panesa </Link></strong>
                                    <span className="has-text-grey">
                                        &#169; {new Date().getFullYear()}
                                    </span>
                                </p>
                                <p className="subtitle">Follow me on social media</p>
                                <div className="columns is-mobile">
                                    <div className="column is-4">
                                        <a className="has-text-grey" href="https://www.facebook.com/IvexBrykzJayRo" target="_blank" title="Follow me @ivexbrykzjayro">
                                            <i class="fab fa-facebook fa-3x faa-vertical animated-hover" aria-hidden="true"></i>
                                        </a>
                                    </div>
                                    <div className="column is-4">
                                        <a className="has-text-grey" href="https://www.instagram.com/bryanpanesa/" target="_blank" title="Follow me @bryanpanesa">
                                            <i class="fab fa-instagram fa-3x faa-vertical animated-hover" aria-hidden="true"></i>
                                        </a>
                                    </div>
                                    <div className="column is-4">
                                        <a className="has-text-grey" href="https://twitter.com/ivexbrykzjayro" target="_blank" title="Follow me @ivexbrykzjayro">
                                            <i class="fab fa-twitter fa-3x faa-vertical animated-hover" aria-hidden="true"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="column is-4">
                                <p className="title is-4">Get in touch.</p>
                                <p className="subtitle">I'm always looking to connect and<br/>
                                chat with amazing people.</p>
                                <p className="subtitle">Feel free to reach out!</p>
                            </div>
                            <div className="column is-4">
                            <p className="title is-4">Let's connect!</p>
                            <p className="subtitle">Connect connect now!</p>
                                <div className="columns is-mobile">
                                    <div className="column is-4">
                                        <a className="has-text-grey" href="mailto:bryanjay.panesa@gmail.com" target="_blank" title="Shoot me an email!">
                                            <i class="fa fa-envelope fa-3x faa-vertical animated-hover" aria-hidden="true"></i>
                                        </a>
                                    </div>
                                    <div className="column is-4">
                                        <a className="has-text-grey" href="http://linkedin.com/in/bryan-jay-b-panesa-26874512a" target="_blank" title="Check out my Linkedin profile!">
                                            <i class="fab fa-linkedin fa-3x faa-vertical animated-hover" aria-hidden="true"></i>
                                        </a>
                                    </div>
                                    <div className="column is-4">
                                        <a className="has-text-grey" href="https://github.com/bryanpanesa" target="_blank" title="Check out my GitHub profile!">
                                            <i class="fab fa-github fa-3x faa-vertical animated-hover" aria-hidden="true"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;