import React, { Component } from 'react';
import '../../components/css/projects.css';

//Components
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Header from '../../components/header';

//Images
import commitlogs from '../../images/projects/commitlogs/commitlogs.jpg';
import commitlogs1 from '../../images/projects/commitlogs/commitlogs1.png';
import commitlogs2 from '../../images/projects/commitlogs/commitlogs2.png';

class Commitlogs extends Component {
    render() {
        var projectData = {
            title: "Commit Logs From Last Night",
            company: "Personal Project",
            date: "2018 October",
            type: "Product Design",
            role: [
                "UI/UX Designer"
            ],
            tools_used: [
                "Adobe XD",
                "Adobe Photoshop"
            ],
            team: [
                "Bryan Jay Panesa"
            ],
            desc: [
                "Mobile app design of the famout 'Commit Logs From Last Night' website."
            ],
            for_project: "This project was made for my personal product design journey."
        };
        return (
            <div>
                <figure className="image">
                    <img src={commitlogs} alt="Commit Logs From Last Night" />
                </figure>
                <Navbar />
                <Header projectData={projectData} />
                <section className="section">
                    <div className="containter">

                        <div className="container">
                            <div className="columns">
                                <div className="column is-10 is-offset-1">
                                    <h3 className="is-size-4 has-text-centered"><strong>Brief</strong></h3><br />
                                    <p className="is-size-5">Mobile app design of the famout 'Commit Logs From Last Night' website.</p><br />
                                    <p className="is-size-5">This was one of the app design I made for my daily UI/UX design challenge.</p>
                                </div>
                            </div>
                            <div className="columns">
                                <div className="column is-6">
                                    <div className="card">
                                        <div className="card-image">
                                            <figure className="image">
                                                <img src={commitlogs1} alt="Commit Logs From Last Night" />
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                                <div className="column is-6">
                                    <div className="card">
                                        <div className="card-image">
                                            <figure className="image">
                                                <img src={commitlogs2} alt="Commit Logs From Last Night" />
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div><br /><br /><br /><br />

                    </div>
                </section>
                <Footer />
            </div>
        );
    }
}

export default Commitlogs;