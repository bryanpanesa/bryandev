import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './css/navbar.css';
import $ from '../../node_modules/jquery/dist/jquery.slim';

const menuItems = [
    'photography',
    'about'
];

class Navbar extends Component {
    render() {
        $(document).ready(function () {

            // Check for click events on the navbar burger icon
            $(".navbar-burger").click(function () {

                // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                $(".navbar-burger").toggleClass("is-active");
                $(".navbar-menu").toggleClass("is-active");

            });
        });
        return(
            <nav className="navbar is-spaced is-fixed-top">
                <div className="container">
                <div className="navbar-brand">
                    <Link className="navbar-item" to="/">
                        <span><h1 className="subtitle is-uppercase has-text-black">Bryan</h1></span>
                        <span><h1 className="subtitle is-uppercase has-text-grey-light">&nbsp;Panesa</h1></span>
                    </Link>
                    <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
                    <span></span>
                    <span></span>
                    <span></span>
                    </div>
                </div>

                <div id="navbarExampleTransparentExample" className="navbar-menu">
                    <div className="navbar-end">
                        <Link to="/" className="navbar-item">Work</Link>
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
                </div>
            </nav>
        );
    }
}

export default Navbar;