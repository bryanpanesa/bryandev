import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './css/projects-comp.css';

//Images
import bfp from '../images/projects/bfp/bfp1.PNG';
import gogon from '../images/projects/gogon/gogon1.PNG';
import phagebiotics from '../images/projects/phagebiotics/phage2.jpg';
import typeab from '../images/projects/typeab/type1.PNG';

class Projects extends Component {
    render() {
        return(
            <section className="container">
                {/* 1st row */}
                <div className="columns">
                    <div className="column is-6">
                        <div className="card">
                            <div className="card-image">
                                <figure className="image">
                                    <img src={bfp} alt="Bureau of Fire Protection Region V Assessment & Reports System" />
                                </figure>
                            </div>
                            <div className="card-content">
                                <div className="media">
                                    <Link to="/projects/bfp">
                                    <div className="media-content">
                                        <p className="title is-4">BFP Region V Assessment & Reports System</p>
                                    </div>
                                    </Link>
                                </div>
                                <div className="content">
                                    <div className="tags is-uppercase">
                                        <span className="tag is-light">Php</span>
                                        <span className="tag is-light">Bootstrap</span>
                                        <span className="tag is-light">MySQL</span>
                                        <span className="tag is-light">jQuery</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column is-6">
                        <div className="card">
                            <div className="card-image">
                                <figure className="image">
                                    <img src={phagebiotics} alt="Phagebiotics: A 2D Survival Game" />
                                </figure>
                            </div>
                            <div className="card-content">
                                <div className="media">
                                    <div className="media-content">
                                        <p className="title is-4">Phagebiotics: A 2D Survival Game</p>
                                    </div>
                                </div>
                                <div className="content">
                                    <div className="tags is-uppercase">
                                        <span className="tag is-light">Java</span>
                                        <span className="tag is-light">Photoshop</span>
                                        <span className="tag is-light">Tile Editor</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 2nd row */}
                <div className="columns">
                    <div className="column is-6">
                        <div className="card">
                            <div className="card-image">
                                <figure className="image">
                                    <img src={gogon} alt="Gogon High School Grading Module" />
                                </figure>
                            </div>
                            <div className="card-content">
                                <div className="media">
                                    <div className="media-content">
                                        <p className="title is-4">Gogon High School Grading Module</p>
                                    </div>
                                </div>
                                <div className="content">
                                    <div className="tags is-uppercase">
                                        <span className="tag is-light">Php</span>
                                        <span className="tag is-light">Bootstrap</span>
                                        <span className="tag is-light">MySQL</span>
                                        <span className="tag is-light">jQuery</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column is-6">
                        <div className="card">
                            <div className="card-image">
                                <figure className="image">
                                    <img src={typeab} alt="Type AB" />
                                </figure>
                            </div>
                            <div className="card-content">
                                <div className="media">
                                    <div className="media-content">
                                        <p className="title is-4">Type AB</p>
                                    </div>
                                </div>
                                <div className="content">
                                    <div className="tags is-uppercase">
                                        <span className="tag is-light">Bootstrap</span>
                                        <span className="tag is-light">jQuery</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Projects;