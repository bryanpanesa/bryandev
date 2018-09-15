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
                                                        <div className="tags">
                                                            {
                                                                
                                                            }
                                                        </div>
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
                                    <a target="_blank" className="button is-default is-outlined is-medium" href="https://github.com/bryanpanesa/bryandev/blob/master/public/bryanpanesa-resume.pdf">
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

                <section className="section tools">
                    <div className="columns has-text-centered">
                        <div className="column">
                            <div className="columns">
                                {/* Responsive column */}
                                <div className="column is-4">
                                    <div className="columns">
                                        <div className="column is-3">
                                            <h2 className="is-size-1">
                                                <figure class="bd-link-figure">
                                                    <span class="bd-link-icon has-text-primary">
                                                        <svg class="svg-inline--fa fa-columns fa-w-16" aria-hidden="true" data-prefix="fas" data-icon="columns" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M464 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM224 416H64V160h160v256zm224 0H288V160h160v256z"></path></svg>
                                                    </span>
                                                </figure>
                                            </h2>
                                        </div>
                                        <div className="column">
                                            <h2 className="is-size-4 has-text-left"><strong>Responsive Design</strong></h2>
                                            <p className="subtitle">Creating responsive webpages that works responsively on <strong>mobile</strong> and different screen sizes by using a preprocessor like <strong>SaSS</strong>.</p>
                                        </div>
                                    </div>
                                </div>
                                {/* Javascript Frameworks column */}
                                <div className="column is-4">
                                    <div className="columns">
                                        <div className="column is-3">
                                            <h2 className="is-size-1">
                                                <figure class="bd-link-figure">
                                                    <span class="bd-link-icon has-text-warning">
                                                        <svg class="svg-inline--fa fa-cogs fa-w-20" aria-hidden="true" data-prefix="fas" data-icon="cogs" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg=""><path fill="currentColor" d="M512.1 191l-8.2 14.3c-3 5.3-9.4 7.5-15.1 5.4-11.8-4.4-22.6-10.7-32.1-18.6-4.6-3.8-5.8-10.5-2.8-15.7l8.2-14.3c-6.9-8-12.3-17.3-15.9-27.4h-16.5c-6 0-11.2-4.3-12.2-10.3-2-12-2.1-24.6 0-37.1 1-6 6.2-10.4 12.2-10.4h16.5c3.6-10.1 9-19.4 15.9-27.4l-8.2-14.3c-3-5.2-1.9-11.9 2.8-15.7 9.5-7.9 20.4-14.2 32.1-18.6 5.7-2.1 12.1.1 15.1 5.4l8.2 14.3c10.5-1.9 21.2-1.9 31.7 0L552 6.3c3-5.3 9.4-7.5 15.1-5.4 11.8 4.4 22.6 10.7 32.1 18.6 4.6 3.8 5.8 10.5 2.8 15.7l-8.2 14.3c6.9 8 12.3 17.3 15.9 27.4h16.5c6 0 11.2 4.3 12.2 10.3 2 12 2.1 24.6 0 37.1-1 6-6.2 10.4-12.2 10.4h-16.5c-3.6 10.1-9 19.4-15.9 27.4l8.2 14.3c3 5.2 1.9 11.9-2.8 15.7-9.5 7.9-20.4 14.2-32.1 18.6-5.7 2.1-12.1-.1-15.1-5.4l-8.2-14.3c-10.4 1.9-21.2 1.9-31.7 0zm-10.5-58.8c38.5 29.6 82.4-14.3 52.8-52.8-38.5-29.7-82.4 14.3-52.8 52.8zM386.3 286.1l33.7 16.8c10.1 5.8 14.5 18.1 10.5 29.1-8.9 24.2-26.4 46.4-42.6 65.8-7.4 8.9-20.2 11.1-30.3 5.3l-29.1-16.8c-16 13.7-34.6 24.6-54.9 31.7v33.6c0 11.6-8.3 21.6-19.7 23.6-24.6 4.2-50.4 4.4-75.9 0-11.5-2-20-11.9-20-23.6V418c-20.3-7.2-38.9-18-54.9-31.7L74 403c-10 5.8-22.9 3.6-30.3-5.3-16.2-19.4-33.3-41.6-42.2-65.7-4-10.9.4-23.2 10.5-29.1l33.3-16.8c-3.9-20.9-3.9-42.4 0-63.4L12 205.8c-10.1-5.8-14.6-18.1-10.5-29 8.9-24.2 26-46.4 42.2-65.8 7.4-8.9 20.2-11.1 30.3-5.3l29.1 16.8c16-13.7 34.6-24.6 54.9-31.7V57.1c0-11.5 8.2-21.5 19.6-23.5 24.6-4.2 50.5-4.4 76-.1 11.5 2 20 11.9 20 23.6v33.6c20.3 7.2 38.9 18 54.9 31.7l29.1-16.8c10-5.8 22.9-3.6 30.3 5.3 16.2 19.4 33.2 41.6 42.1 65.8 4 10.9.1 23.2-10 29.1l-33.7 16.8c3.9 21 3.9 42.5 0 63.5zm-117.6 21.1c59.2-77-28.7-164.9-105.7-105.7-59.2 77 28.7 164.9 105.7 105.7zm243.4 182.7l-8.2 14.3c-3 5.3-9.4 7.5-15.1 5.4-11.8-4.4-22.6-10.7-32.1-18.6-4.6-3.8-5.8-10.5-2.8-15.7l8.2-14.3c-6.9-8-12.3-17.3-15.9-27.4h-16.5c-6 0-11.2-4.3-12.2-10.3-2-12-2.1-24.6 0-37.1 1-6 6.2-10.4 12.2-10.4h16.5c3.6-10.1 9-19.4 15.9-27.4l-8.2-14.3c-3-5.2-1.9-11.9 2.8-15.7 9.5-7.9 20.4-14.2 32.1-18.6 5.7-2.1 12.1.1 15.1 5.4l8.2 14.3c10.5-1.9 21.2-1.9 31.7 0l8.2-14.3c3-5.3 9.4-7.5 15.1-5.4 11.8 4.4 22.6 10.7 32.1 18.6 4.6 3.8 5.8 10.5 2.8 15.7l-8.2 14.3c6.9 8 12.3 17.3 15.9 27.4h16.5c6 0 11.2 4.3 12.2 10.3 2 12 2.1 24.6 0 37.1-1 6-6.2 10.4-12.2 10.4h-16.5c-3.6 10.1-9 19.4-15.9 27.4l8.2 14.3c3 5.2 1.9 11.9-2.8 15.7-9.5 7.9-20.4 14.2-32.1 18.6-5.7 2.1-12.1-.1-15.1-5.4l-8.2-14.3c-10.4 1.9-21.2 1.9-31.7 0zM501.6 431c38.5 29.6 82.4-14.3 52.8-52.8-38.5-29.6-82.4 14.3-52.8 52.8z"></path></svg>
                                                    </span>
                                                </figure>
                                            </h2>
                                        </div>
                                        <div className="column">
                                            <h2 className="is-size-4 has-text-left"><strong>Javascript Frameworks</strong></h2>
                                            <p className="subtitle">Programming interaction with <strong>Javascript libraries</strong> like Angular & React.</p>
                                        </div>
                                    </div>
                                </div>
                                {/* Cross-browser Compatibility column */}
                                <div className="column is-4">
                                    <div className="columns">
                                        <div className="column is-3">
                                            <h2 className="is-size-1">
                                                <figure class="bd-link-figure">
                                                    <span class="bd-link-icon has-text-info">
                                                        <svg class="svg-inline--fa fa-pause fa-w-14" aria-hidden="true" data-prefix="fas" data-icon="pause" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm304-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48z"></path></svg>
                                                    </span>
                                                </figure>
                                            </h2>
                                        </div>
                                        <div className="column">
                                            <h2 className="is-size-4 has-text-left"><strong>Compatibility</strong></h2>
                                            <p className="subtitle">Testing <strong>cross-browser</strong> & <strong>cross-platform</strong> compatibility.</p>
                                        </div>
                                    </div>
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