import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './css/navbar.css';

class Navbar extends Component {
    render() {
        return(
            <nav className="navbar is-spaced is-fixed-top">
                <div className="navbar-brand">
                    <Link className="navbar-item" to="/">
                        <span><h1 className="subtitle is-uppercase has-text-black">{this.props.firstName}</h1></span>
                        <span><h1 className="subtitle is-uppercase has-text-grey-light">&nbsp;{this.props.lastName}</h1></span>
                    </Link>
                    <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
                    <span></span>
                    <span></span>
                    <span></span>
                    </div>
                </div>

                <div id="navbarExampleTransparentExample" className="navbar-menu">
                    <div className="navbar-end">
                    <Link to="/" className="navbar-item is-active">Work</Link>
                    <div className="navbar-item has-dropdown is-hoverable">
                        <Link className="navbar-link" to="/">
                        Not Work
                        </Link>
                        <div className="navbar-dropdown is-boxed">
                            <Link className="navbar-item" disabled to="/">
                                <span className="icon">
                                    <i className="fas fa-camera"></i>
                                </span>
                                <span>Photography</span>
                            </Link>
                            {/* <hr className="navbar-divider"/> */}
                            <Link className="navbar-item" to="/">
                                <span className="icon">
                                    <i className="fab fa-android"></i>
                                </span>
                                <span>Beta Testing</span>
                            </Link>
                        </div>
                        
                    </div>
                    <Link to="/about" className="navbar-item">About</Link>
                    <div className="navbar-item">
                        <div className="field is-grouped">
                        <p className="control">
                            <a className="button is-info is-outlined" href="https://github.com/jgthms/bulma/releases/download/0.7.1/bulma-0.7.1.zip">
                            <span className="icon">
                                <i className="fas fa-download"></i>
                            </span>
                            <span>Resume</span>
                            </a>
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;