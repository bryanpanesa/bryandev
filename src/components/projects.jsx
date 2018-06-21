import React, { Component } from 'react';
import './css/projects.css';

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
                                    <img src="https://cdn-images-1.medium.com/max/1600/1*_0kPOM7zkPqw7-xFLrynbA.png" />
                                </figure>
                            </div>
                            <div className="card-content">
                                <div className="media">
                                    <div className="media-content">
                                        <p className="title is-4">BFP Region V Assessment & Reports System</p>
                                </div>
                                </div>
                                <div className="content">
                                    <div className="tags is-uppercase">
                                        <span className="tag is-info">Php</span>
                                        <span className="tag is-info">Bootstrap</span>
                                        <span className="tag is-info">MySQL</span>
                                        <span className="tag is-info">jQuery</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column is-6">
                        <div className="card">
                            <div className="card-image">
                                <figure className="image">
                                    <img src="https://cdn-images-1.medium.com/max/1600/1*_0kPOM7zkPqw7-xFLrynbA.png" />
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
                                        <span className="tag is-info">Php</span>
                                        <span className="tag is-info">Bootstrap</span>
                                        <span className="tag is-info">MySQL</span>
                                        <span className="tag is-info">jQuery</span>
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
                                    <img src="https://cdn-images-1.medium.com/max/1600/1*_0kPOM7zkPqw7-xFLrynbA.png" />
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
                                        <span className="tag is-info">Php</span>
                                        <span className="tag is-info">Bootstrap</span>
                                        <span className="tag is-info">MySQL</span>
                                        <span className="tag is-info">jQuery</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column is-6">
                        <div className="card">
                            <div className="card-image">
                                <figure className="image">
                                    <img src="https://cdn-images-1.medium.com/max/1600/1*_0kPOM7zkPqw7-xFLrynbA.png" />
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
                                        <span className="tag is-info">Php</span>
                                        <span className="tag is-info">Bootstrap</span>
                                        <span className="tag is-info">MySQL</span>
                                        <span className="tag is-info">jQuery</span>
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