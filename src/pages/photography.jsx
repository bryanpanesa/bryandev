import React, { Component } from 'react';
import '../components/css/photography.css';
import Instafeed from 'react-instafeed';

// Components
import Navbar from '../components/navbar';
import Footer from '../components/footer';

class Photography extends Component {
    render() {
        const instafeedTarget = 'instafeed';
        var divStyle = {
            background: 'rgba(40, 40, 40, 1)'
        }
        return(
            <div style={divStyle}>
            <Navbar />
                <section className="section">
                    <div className="container is-fluid">
                        <div className="columns has-text">
                            <div className="column is-8 is-offset-2">
                                <p style={{color: '#fff'}} className="is-size-3 has-text-centered">I shoot <b>portraits</b> and stuff.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <div id={instafeedTarget} className="masonry">
                    <Instafeed
                        limit='100'
                        ref='instafeed'
                        resolution='standard_resolution'
                        sortBy='most-recent'
                        links=''
                        target={instafeedTarget}
                        template='
                        <div class="item">
                            <a href="{{link}}" target="_blank">
                            <img src="{{image}}" alt="Instagram Photo" />
                            </a>
                        </div>
                        '
                        userId='1685258470'
                        clientId='clientIdInstagramApiString'
                        accessToken='1685258470.1677ed0.fc592251962f44378a6889941fb148e2'
                    />
                </div>
            <Footer />
            </div>
        );
    }
}
export default Photography;