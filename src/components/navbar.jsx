import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './css/navbar.css';

const menuItems = [
    'photography',
    'about'
];

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
                        <Link to="/" className="navbar-item is-capitalized">Work</Link>
                        {
                            menuItems.map(menuItem => 
                            <Link to={ "/" + menuItem } className="navbar-item is-capitalized">{menuItem}</Link>
                            )
                        }
                        {/* <Link to="/" className="navbar-item is-active">Work</Link>
                        <Link className="navbar-item" disabled to="/photography">Photography</Link>
                        <Link to="/about" className="navbar-item" activeClassName="active">About</Link> */}
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;