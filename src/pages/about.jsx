import React, { Component } from 'react';

//Components
import Navbar from '../components/navbar';
import Footer from '../components/footer';

//JSON ata
const workExperience = require('./projects/components/json/work-experience.json');
const education = require('./projects/components/json/education.json');

class About extends Component {
    render() {
        return(
            <div>
                <Navbar />
                <br/><br/>
                <section className="section">
                    <div className="container is-fluid">
                        <div className="columns has-text">
                            <div className="column is-8 is-offset-2">
                                <p className="is-size-3 has-text-centered">Hi, I'm <strong>Bryan Jay Panesa</strong>, a <strong>Front End Developer</strong> currently based in Manila, Philippines.</p>
                            </div>

                        </div>
                    </div>
                </section>
                <section className="section experience">
                    <div className="columns">
                        <div className="column is-offset-1">
                            <div className="columns">
                                <div className="column is-2 has-text-justified">
                                    <h2 className="is-size-4">Experience</h2>
                                </div>
                                <div className="column">
                                    {
                                        workExperience.map(work => 
                                            <article class="media">
                                                <figure class="media-left">
                                                    <p class="image is-64x64">
                                                        <img src={work.logo} alt="Company" />
                                                    </p>
                                                </figure>
                                                <div class="media-content">
                                                    <div class="content">
                                                        <p className="is-size-5">
                                                            <strong>{work.role}, </strong>
                                                            <strong className="has-text-weight-semibold">{work.company}</strong>
                                                            <br />
                                                            <span className="has-text-weight-light">{work.duration} | {work.location}</span>
                                                        </p>
                                                        <ul>
                                                            {
                                                            work.description.map(desc =>
                                                                <li>{desc}</li>
                                                            )
                                                            }
                                                        </ul>
                                                    </div>
                                                </div>
                                            </article>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section education">
                    <div className="columns">
                        <div className="column is-offset-1">
                            <div className="columns">
                                <div className="column is-2 has-text-justified">
                                    <h2 className="is-size-4">Education</h2>
                                </div>
                                <div className="column">
                                    {
                                        education.map(educ =>
                                            <article class="media">
                                                <figure class="media-left">
                                                    <p class="image is-64x64">
                                                        <img src={educ.logo} alt="Company"/>
                                                    </p>
                                                </figure>
                                                <div class="media-content">
                                                    <div class="content">
                                                        <p className="is-size-5">
                                                            <strong>{educ.course}, </strong>
                                                            <br />
                                                            <strong className="has-text-weight-semibold">{educ.school}</strong>
                                                            <br />
                                                            <span className="has-text-weight-light">{educ.school_year}</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </article>
                                        )
                                    }
                                    <br /><br />
                                        <a className="button is-default is-outlined is-medium" href="https://github.com/jgthms/bulma/releases/download/0.7.1/bulma-0.7.1.zip">
                                            <span className="icon">
                                                <i className="fas fa-download"></i>
                                            </span>
                                            <span>Download resume</span>
                                        </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        );
    }
}

export default About;