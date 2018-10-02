import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Link } from 'react-router-dom';

//UI & UX Design
import positiv from '../images/projects/positiv/positiv.jpg';
import collab from '../images/projects/collab/collab.jpg';
import letgo from '../images/projects/letgo/letgo.jpg';

//Web
import bfp from '../images/projects/bfp/Bfp-block.jpg';
import gogonBlock from '../images/projects/gogon/Gogon-block.jpg';
import phagebiotics from '../images/projects/phagebiotics/Phagebiotics-block.jpg';
import typeab from '../images/projects/typeab/Typeab-block.jpg';
import inventory from '../images/projects/inventory/Inventory-block.jpg';
import presidents from '../images/projects/presidents/Presidents-block.jpg';

class Projects extends Component {
    render() {
        return(
            <section className="section">
                <Tabs className="container header" id="myHeader">
                    <TabList className="tab flex flex-center">
                        <Tab className="tab-list is-size-3 subtitle is-uppercase has-text-grey-light has-text-weight-semibold">UI/UX</Tab>
                        <Tab className="tab-list is-size-3 subtitle is-uppercase has-text-grey-light has-text-weight-semibold">Web</Tab>
                    </TabList>
                    <TabPanel>
                        {/* 1st row */}
                        <div className="columns">
                            <div className="column is-6">
                                <Link to="/projects/positiv">
                                    <div className="card">
                                        <div className="card-image">
                                            <figure className="image">
                                                <img src={positiv} alt="Positiv" />
                                            </figure>
                                        </div>
                                        <div className="card-content">
                                            <div className="media">

                                                <div className="media-content">
                                                    <p className="title is-4">Positiv</p>
                                                </div>

                                            </div>
                                            <div className="content">
                                                <p className="is-size-5">
                                                    <span className="has-text-weight-light">Mobile app that saves positive moments in someone's everyday life.</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="column is-6">
                                <Link to="/projects/collab">
                                    <div className="card">
                                        <div className="card-image">
                                            <figure className="image">
                                                <img src={collab} alt="Positiv" />
                                            </figure>
                                        </div>
                                        <div className="card-content">
                                            <div className="media">

                                                <div className="media-content">
                                                    <p className="title is-4">Collab</p>
                                                </div>

                                            </div>
                                            <div className="content">
                                                <p className="is-size-5">
                                                    <span className="has-text-weight-light">An app specifically for photoshoot collaborations to easily and safely locate shoots.</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>


                        {/* 1st row */}
                        <div className="columns">
                            <div className="column is-6">
                                <Link to="/projects/letgo">
                                    <div className="card">
                                        <div className="card-image">
                                            <figure className="image">
                                                <img src={letgo} alt="Letgo" />
                                            </figure>
                                        </div>
                                        <div className="card-content">
                                            <div className="media">

                                                <div className="media-content">
                                                    <p className="title is-4">Letgo</p>
                                                </div>

                                            </div>
                                            <div className="content">
                                                <p className="is-size-5">
                                                    <span className="has-text-weight-light">App used to help users limit or quit the usage of mobile apps like games and social media.</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        {/* 1st row */}
                        <div className="columns">
                            <div className="column is-6">
                                <Link to="/projects/bfp">
                                    <div className="card">
                                        <div className="card-image">
                                            <figure className="image">
                                                <img src={bfp} alt="Bureau of Fire Protection Region V Assessment & Reports System" />
                                            </figure>
                                        </div>
                                        <div className="card-content">
                                            <div className="media">

                                                <div className="media-content">
                                                    <p className="title is-4">BFP Region V Assessment & Reports</p>
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
                                </Link>
                            </div>
                            <div className="column is-6">
                                <Link to="/projects/phagebiotics">
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
                                </Link>
                            </div>
                        </div>
                        {/* 2nd row */}
                        <div className="columns">
                            <div className="column is-6">
                                <Link to="/projects/gogon">
                                    <div className="card">
                                        <div className="card-image">
                                            <figure className="image">
                                                <img src={gogonBlock} alt="Gogon High School Grading Module" />
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
                                </Link>
                            </div>
                            <div className="column is-6">
                                <Link to="/projects/typeab">
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
                                </Link>
                            </div>
                        </div>
                        {/* 3rd row */}
                        <div className="columns">
                            <div className="column is-6">
                                <Link to="/projects/inventory">
                                    <div className="card">
                                        <div className="card-image">
                                            <figure className="image">
                                                <img src={inventory} alt="PHP OOP C.R.U.D." />
                                            </figure>
                                        </div>
                                        <div className="card-content">
                                            <div className="media">
                                                <div className="media-content">
                                                    <p className="title is-4">PHP OOP C.R.U.D.</p>
                                                </div>
                                            </div>
                                            <div className="content">
                                                <div className="tags is-uppercase">
                                                    <span className="tag is-light">Php</span>
                                                    <span className="tag is-light">Bootstrap</span>
                                                    <span className="tag is-light">MySQL</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="column is-6">
                                <Link to="/projects/presidents">
                                    <div className="card">
                                        <div className="card-image">
                                            <figure className="image">
                                                <img src={presidents} alt="Type AB" />
                                            </figure>
                                        </div>
                                        <div className="card-content">
                                            <div className="media">
                                                <div className="media-content">
                                                    <p className="title is-4">Presidents of the Philippines</p>
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
                                </Link>
                            </div>
                        </div>
                    </TabPanel>
                    
                </Tabs>
                
            </section>
        );
    }
}

export default Projects;