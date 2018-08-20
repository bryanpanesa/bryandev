import React, { Component } from 'react';
import '../components/css/photography.css';
import Instafeed from 'react-instafeed';

// Components
import Navbar from '../components/navbar';
import Footer from '../components/footer';

// Images
import phage2 from '../images/projects/phagebiotics/phage2.jpg';
import phage3 from '../images/projects/phagebiotics/phage3.jpg';

class Photography extends Component {
    render() {
        const instafeedTarget = 'instafeed';
        var divStyle = {
            background: 'rgba(40, 40, 40, 1)'
        }
        var loadButton = document.getElementById('load-more');
        const loadMore = {
            function() {
                // disable button if no more results to load
                if (!this.hasNext()) {
                    loadButton.setAttribute('disabled', 'disabled');
                }
            }
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
                        sortBy='random'
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
                        after={
                            function () {
                                // disable button if no more results to load
                                if (!this.hasNext()) {
                                    loadButton.setAttribute('disabled', 'disabled');
                                }
                            }
                        }
                    />
                </div>
                <button id="load-more" class="btn">Load more</button>
            <Footer />
            </div>
        );
        // bind the load more button
        loadButton.addEventListener('click', function () {
            Instafeed.instafeed.next();
        });
    }
}
export default Photography;